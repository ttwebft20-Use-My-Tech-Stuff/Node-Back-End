# Node Back-End - Build Week - tt_wbft_20 - Jennifer Kramer

**[Endpoints]** Base URL: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api
- This url will be the beginning of all endpoints. Add the following endpoints below to the base URL.

## [Register]
- No token is required when registering.
- Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/register

    * **[POST] [Register]** - Register a new user </br>
        - Endpoint: **/auth/register**

        **Fields Required:** </br>
        "username" - string, unique (MUST not match any other registered username) </br>
        "first_name" - string </br>
        "last_name" - string </br>
        "email" - string </br>
        "zipcode" - string </br>
        "password" - string </br>
        "role" - string, either MUST be "owner" or "renter" </br>

## [Login]
- Token required for login.
- Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/login

    * **[POST] [Login]** - Login an already registered user to receive a token </br>
        - Endpoint: **/auth/login**

        **Fields Required:** </br>
        "username" - string, MUST match a registered username </br>
        "password" - string, MUST match a registered password with registered username </br>

## [Users]
- Token required for seeing users.

    * **[GET] [FindAllUsers]** - Finds all users (owners and renters) </br>
        - Endpoint: **/users**
        - Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/users

    * **[GET] [FindUserById]** - Find a registered user by user id </br>
        - Endpoint: **/users/:users_id**
        - Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/users/1

-----TESTING - DO NOT USE YET------

## [Rentable Items - Find]
- Token required to view rentable items.

    * **[GET] [FindAllRentableItems]** - Find all rentable items. </br>
        - Endpoint: **/rentable_items**
        - Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/rentable_items
    
    * **[GET] [FindItemById]** - Find rentable item by ID. </br>
        - Endpoint: **/rentable_items/:id**
        - Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/rentable_items/1

## [Rentable Items - Add]
- Token required to add rentable items.
    
    * **[POST] [AddNewItem]** - Add new rentable item. </br>
        - Endpoint: **/rentable_items**
        - Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/rentable_items

        **Fields Required:** </br>
        "item_name" - string, up to 128 characters
        "category" - string
        "description" - string, up to 500 characters
        "rented" - boolean, determines if available or rented
        "price" - integer
        "owner_username" - string