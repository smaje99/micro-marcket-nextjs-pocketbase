/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3t7ygfzisgm5koy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ix7oxwda",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3t7ygfzisgm5koy")

  // remove
  collection.schema.removeField("ix7oxwda")

  return dao.saveCollection(collection)
})
