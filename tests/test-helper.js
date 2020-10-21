import Application from 'couch-potato-web/app';
import config from 'couch-potato-web/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
