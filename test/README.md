kickq API
=====
Kick jobs out the door. Quickly.
A job queue for node.


## General API overview

### One time setup
```js
var KickQ = require('kickq');

KickQ.config(config.redis);
```

### Create a Job

```js
var KickQ = require('kickq');

var k = new KickQueue();

var data = {some:'stuff'};

// this is delayed by x amount of time from scheduling time
var opts = {delay: 1000 };

// ...or singleton job data is croned
// repeated by cron format (https://github.com/ncb000gt/node-cron)
var opts = { cron: '* * * 10'};

k.create('job name', data, opts, function(err, key) {
  err = is something went wrong
  key = the key of the job that can be used to delete a job
});

// Create a Tombstoning Job
var opts = {
  tombstone: true,
  tombstoneTimeout: 10 // seconds, default set via kickQ.config()
};
k.create('job name', data, opts, function(err, key) {
  err = is something went wrong
  key = the key of the job that can be used to delete a job
});


```


```js
k.createTombed('job name', data, opts, function(err, key) {

  err = is something went wrong

  key = the key of the job that can be used to delete a job

});
```

### Process job
```js
k.process(['job name'], optMaxJobsNum, function(jobName, data, cb) {
  cb('error'); // <-- error

  cb(); // <-- no error

});
```

### Delete a job
```js
k.delete(key);
```

## Notes

### Problems Kue has we want to solve
* There's a lot of effort on UI vs functionality
* There are old jobs hanging
* There are unaddressed bugs
* There is no cron functionality
* It is no longer maintained


### Nice to have:
* Retry
* Tombstoning
* Simple aggregation stats