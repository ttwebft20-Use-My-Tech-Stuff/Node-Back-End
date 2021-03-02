# Node Back-End - Build Week - tt_wbft_20 - Jennifer Kramer

-----TESTING - DO NOT USE YET------

**[Endpoints]** Base URL: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api
- This url will be the beginning of all endpoints. Add the following endpoints below to the base URL.

## [Register]
- Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/register
- No token is required when registering.

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
- Example: http://ttwebft20-use-my-tech-stuff.herokuapp.com/api/auth/login
- Token required for login.

    * **[POST] [Login]** - Login an already registered user to receive a token </br>
        Endpoint: **/auth/login**
      
        **Fields Required:** </br>
        "username" - string, MUST match a registered username </br>
        "password" - string, MUST match a registered password with registered username </br>

## [Rentable-Items]
- Example: https://anywhere-fitness-tt42.herokuapp.com/api/rentable-items
- Token required to view owners with rentable items.


