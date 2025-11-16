# Data Files Documentation

## talks.json

### Available Talk Types

When adding a talk, you can specify a `type` field with one of the following values:

- **Keynote** - 🎤 Main stage presentations
- **Panel Discussion** - 👥 Panel discussions
- **Technical Session** - 💻 Deep-dive technical presentations
- **Meetup Talk** - 💬 Community meetup presentations
- **Lightning Talk** - ⚡ Short format talks (5-15 minutes)

### Example

```json
{
  "title": "My Talk Title",
  "conference": "Conference Name",
  "date": "2024-12-03",
  "location": "City, Country",
  "type": "Technical Session",
  "description": "Talk description...",
  "slidesLink": "/slides/my-talk.pdf",
  "recordingLink": "https://youtube.com/...",
  "sort_index": 1
}
```

The `type` field is optional. If omitted, no badge will be displayed.
