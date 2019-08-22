export const schemaJSON = {
  "type": "object",
  "required": [
    "runtime",
    "weight",
    "category"

  ],
  "properties": {
    "text": {
      "type": "string",
      "minLength": 1,
      "title": " ",
    },
    "runtime": {
      "type": "integer",
      "title": "How much time a day would you devote for it? (15-600 min)",
      "minimum": 15,
      "maximum": 600,
    },
    "weight": {
      "type": "integer",
      "title": "Choose weight of your task",
      "minimum": 1,
      "maximum": 10,
      "multipleOf": 1,
      "default": 5
    },
    "category": {
      "type": "string",
      "title": "Choose category of your task",
      "enum": [
        "health",
        "finance",
        "career",
        "leisure",
        "relatives",
      ]
    }
  }
}
