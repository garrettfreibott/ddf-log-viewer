var random = require('random-item')
var levels = require('./levels')

var bundles = [
  'catalog.bundle',
  'platform.bundle',
  'security.bundle',
  'utils.bundle'
]

var apps = [
  'Catalog',
  'Platform',
  'Security'
]

var messages = [
  'Application Context service already unpublished',
  'New service registered [{ddf.catalog.transform.MetacardTransformer}={mime-type=text/xml, schema=http://www.opengis.net/cat/csw/2.0.2, id=csw:Record, service.id=652, service.bundleid=388, service.scope=bundle}]',
  'Registered new ddf.action.ActionProvider [{ddf.action.ActionProvider}={id=catalog.data.metacard.csw:Record, service.id=653, service.bundleid=340, service.scope=singleton}]',
  'Refreshing OsgiBundleXmlApplicationContext(bundle=search-endpoint, config=osgibundle:/META-INF/spring/*.xml): startup date [Wed Mar 09 07:05:59 MST 2016]; root of context hierarchy',
  'Application Context service already unpublished'
]

module.exports = function () {
  return {
    time: (new Date()).toISOString(),
    level: random(levels().slice(1)),
    bundle: random(bundles),
    app: random(apps),
    message: random(messages)
  }
}
