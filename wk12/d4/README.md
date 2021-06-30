# :tada:WELCOME TO WEEK 12 DAY 4! :tada:

## Today's Agenda

---

## Nominate this week's champion in MatterMost

- Write a message in your team channel who you nominate and reason

### - Will announce tomorrow morning!

---

## :video_game:ACTIVITY DAY:space_invader: - 1pm

### :balloon:Join us here in main room for Activity games! We can take a vote what games we want to play. :)

---

## :page_with_curl:CODE REVIEW - 2:30pm || 3:00pm

### Dojodachi OR CRUDelicious

#### - _1. demonstrate functionality_

#### - _2. explain your thought process and workflow_

#### - _3. if you had problems, how did you overcome?_

#### - _4. feedback on code_

- Team 1 - Coding Pirates - 3:00pm
- Team 2 - Spoiled Coders - 2:30pm
- Team 6 - Future Developers - 3:00pm
- Team 7 - CodingNinjas - 2:30pm
- Team 8 - The Warriors - 3:00pm

---

## Dojodachi @ 4PM

---

## :school_satchel: Login/Register - ~10am

### - Registration Concerns

- Confirming Password...

```csharp
// Will not be mapped to your users table!
    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string Confirm {get;set;}
```

- Validating Unique Email

```csharp
[HttpPost("register")]
public IActionResult Register(User user)
{
    // Check initial ModelState
    if(ModelState.IsValid)
    {
        // If a User exists with provided email
        if(dbContext.Users.Any(u => u.Email == user.Email))
        {
            // Manually add a ModelState error to the Email field, with provided
            // error message
            ModelState.AddModelError("Email", "Email already in use!");
            // You may consider returning to the View at this point
        }
    }
    // other code
}
```

### - Password Hashing

---

#### `gentle reminders...`

- 20 minute rule! - set a timer if you have to
- ask questions if you're not sure, chances are, your question will help another classmate
- schedule a :one: on :one: with me on calendly before the exam, let's get you prepared! :muscle:

---

### END OF DAY GOAL: :sparkler: Login Register :sparkler:

---

```

```
