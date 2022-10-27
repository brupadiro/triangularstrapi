'use strict';

/**
 * user-video service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-video.user-video');
