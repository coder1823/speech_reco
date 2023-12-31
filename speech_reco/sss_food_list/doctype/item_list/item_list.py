# Copyright (c) 2023, Kaviraj and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from translate import Translator
class ItemList(Document):
    pass
	

@frappe.whitelist()
def translate(food_name):
    # converting english to tamil
    text = food_name
    translator = Translator(to_lang="ta")
    translation = translator.translate(text)
    return translation
