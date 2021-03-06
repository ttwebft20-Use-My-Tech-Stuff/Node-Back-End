# Node Back-End - Build Week - tt_wbft_20 - Jennifer Kramer

**[Endpoints]** Base URL: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api
- This url will be the beginning of all endpoints. Add the following endpoints below to the base URL.

## [Register]
- No token is required when registering
- Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/register

    * **[POST] [Register]** - Register a new user </br>
        - Endpoint: **/auth/register**

        **Fields:** </br>
        "username" - string, unique (MUST not match any other registered username), REQUIRED </br>
        "first_name" - string, REQUIRED </br>
        "last_name" - string, REQUIRED </br>
        "email" - string, unique (MUST not match any other registered email), REQUIRED </br>
        "zipcode" - string, REQUIRED </br>
        "password" - string, REQUIRED </br>
        "role" - string, MUST be "owner" or "renter", REQUIRED </br>

        **SERVER PUTS IN THE FIELDS BELOW AUTOMATICALLY**
        "created_at" - timestamp, no need on client-end </br>
        "updated_at" - timestamp, no need on client-end </br>

## [Login]
- Token required for login
- Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/login

    * **[POST] [Login]** - Login an already registered user to receive a token </br>
        - Endpoint: **/auth/login**

        **Fields:** </br>
        "username" - string, MUST match a registered username, REQUIRED </br>
        "password" - string, MUST match a registered password with registered username, REQUIRED </br>

## [Users]
- Token required for seeing users

    * **[GET] [FindAllUsers]** - Finds all users (owners and renters) </br>
        - Endpoint: **/users**
        - Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/users

    * **[GET] [FindUserById]** - Find a registered user by assigned user ID </br>
        - Endpoint: **/users/:id**
        - Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/users/1

## [Tech Items - Find]
- Token required to view tech items

    * **[GET] [FindAllTechItems]** - Find all tech items </br>
        - Endpoint: **/tech_items**
        - Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/tech_items
    
    * **[GET] [FindTechItemById]** - Find tech item by assigned ID </br>
        - Endpoint: **/tech_items/:id**
        - Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/tech_items/1

## [Tech Items - Add]
- Token required to add tech items
- Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/tech_items
    
    * **[POST] [AddNewTechItem]** - Add a new tech item </br>
        - Endpoint: **/tech_items**

        **Fields:** </br>
        "img_url" - binary, up to 2000 characters </br>
        "item_name" - string, up to 50 characters, REQUIRED </br>
        "category" - string, REQUIRED </br>
        "description" - text, up to 500 characters, REQUIRED </br>
        "rented" - boolean, determines if available or rented, not required </br>
        "price" - integer, REQUIRED </br>
        "owner_username" - string, REQUIRED </br>
        
        **SERVER PUTS IN THE FIELDS BELOW AUTOMATICALLY**
        "created_at" - timestamp, no need on client-end </br>
        "updated_at" - timestamp, no need on client-end </br>

## [Tech Items - Update]
- Token required to update tech item by ID
- Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/tech_items/1

    * **[PUT] [UpdateTechItem]** - Edit a registered tech item </br>
        - Endpoint: **/tech_items/:id**

        **Fields:** </br>
        "img_url" - binary, up to 2000 characters </br>
        "item_name" - string, up to 50 characters, REQUIRED </br>
        "category" - string, REQUIRED </br>
        "description" - text, up to 500 characters, REQUIRED </br>
        "rented" - boolean, determines if available or rented, not required </br>
        "price" - integer, REQUIRED </br>
        "owner_username" - string, REQUIRED </br>

        **SERVER PUTS IN THE FIELDS BELOW AUTOMATICALLY**
        "created_at" - timestamp, no need on client-end </br>
        "updated_at" - timestamp, no need on client-end </br>

## [Tech Items - Delete]
- Token required to remove tech item by ID
- Example: https://ttwebft20-use-my-tech-stuff.herokuapp.com/api/tech_items/1

    * **[DELETE] [DeleteTechItem]** - Delete a registered tech item </br>
        - Endpoint: **/tech_items/:id**