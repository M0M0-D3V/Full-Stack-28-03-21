# :tada:WELCOME TO WEEK 12 DAY 5! :tada:

## :school_satchel: One To Many Relationships - ~10am

### - One To Many

- Navigation Properties

```csharp
public class User
{
    [Key]
    public int UserId {get;set;}
    public string Name {get;set;}
    public string Email {get;set;}
    // Navigation property for related Message objects
    public List<Message> CreatedMessages {get;set;}

}
public class Message
{
    [Key]
    public int MessageId {get;set;}
    public string Content {get;set;}
    public int UserId {get;set;}
    // Navigation property for related User object
    public User Creator {get;set;}
}
```

-.Include()

```csharp
public IActionResult Index()
{
    List<Message> messagesWithUser = dbContext.Messages
        // populates each Message with its related User object (Creator)
        .Include(message => message.Creator)
        .ToList();

    return View(messagesWithUser);
}
```

---

## Check in + Continue - 3pm

### - Bring questions for Q & A

### - Continue Building One To Many

### - Announce Champion of the Week...

---

#### `gentle reminders...`

- 20 minute rule! - set a timer if you have to
- ask questions if you're not sure, chances are, your question will help another classmate
- schedule a :one: on :one: with me on calendly before the exam, let's get you prepared! :muscle:

---

### END OF DAY GOAL: :sparkler: Bank Accounts :sparkler:

Play along with Profile Pictures next week! Put a picture about

---

## REMINDER - SUNDAY 4-JULY AND MONDAY 5-JULY ARE U.S. HOLIDAY

- no class meeting in zoom
- attendance and participate through MatterMost
- video lectures will be recorded and uploaded in playlist
- code for lecture will be up also
