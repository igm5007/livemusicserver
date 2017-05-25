module.exports = {
  apps: [{
    name: 'spotify-auth',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-27-120-28.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/id_rsa.pub',
      ref: 'origin/master',
      repo: 'git@github.com:igm5007/livemusicserver.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
