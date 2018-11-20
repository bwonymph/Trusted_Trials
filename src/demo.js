import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

export const timeline = [{
  icon: 'fa-envelope',
  color: 'blue',
  title: 'Review Request by Pharma Group D',
  time: moment().endOf('day').fromNow(),
  body: 'Pharma Group A wants to open review of Trial 2.',
  buttons: [{
    type: 'primary',
    message: 'Read more',
    href: 'https://en.wikipedia.org/wiki/Passive_management',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Trial 1 has been verified by Pharma Group A',
  time: moment('20181018', 'YYYYMMDD').fromNow(),
  body: 'Test 3 in Trial 1 Data for Drug X has been verified',
  buttons: [{
    type: 'primary',
    message: 'View Verification',
    href: '',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Trial 2 has been verified by Pharma Group B',
  time: moment('20181024', 'YYYYMMDD').fromNow(),
  body: 'Test 3 in Trial 2 Data for Drug X has been verified',
  buttons: [{
    type: 'primary',
    message: 'View Verification',
    href: '',
    target: '_blank'
  }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Trial 2 has been verified by Pharma Group C',
  time: moment('20181024', 'YYYYMMDD').fromNow(),
  body: 'Test 2 in Trial 2 Data for Drug X has been verified',
  buttons: [{
    type: 'primary',
    message: 'View Verification',
    href: '',
    target: '_blank'
  }]
}]
