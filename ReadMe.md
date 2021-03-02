# Node Back-End - Build Week - tt_wbft_20 - Jennifer Kramer

**[Endpoints]** Base URL: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api
- This url will be the beginning of all endpoints. Add the following endpoints below to the base URL.

## [Register]
- No token is required when registering.
- Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/register

    * **[POST] [Register]** - Register a new user </br>
        Endpoint: **/auth/register**

        **Fields Required:** </br>
        "username" - string, unique (MUST not match any other registered username) </br>
        "first_name" - string </br>
        "last_name" - string </br>
        "email" - string </br>
        "password" - string </br>
        "role" - string, either MUST be "owner" or "renter"

## [Login]
- Token required for login.
- Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/login

    * **[POST] [Login]** - Login an already registered user to receive a token </br>
        Endpoint: **/auth/login**

        **Fields Required:** </br>
        "username" - string, MUST match a registered username </br>
        "password" - string, MUST match a registered password with registered username </br>
        
-----TESTING - DO NOT USE YET------

## [Rentable Items]
- Token required to view rentable items.
- Example: 