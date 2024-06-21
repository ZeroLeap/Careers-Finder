{
    "manifest_version": 3,
    "name": "Careers Finder",
    "version": "1.0",
    "description": "Find a company's careers page quickly.",
    "icons": { "128": "icon128.png" },
    "action": {
        "default_icon": "icon128.png"
    },
    "background": {
        "service_worker": "background.js"
    },
    "permissions": ["activeTab", "tabs", "scripting"]
}
