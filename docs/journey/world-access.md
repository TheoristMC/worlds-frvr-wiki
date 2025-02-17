# World Access

## Access Hierarchy

|     Type      | Description                                                                                  | Hierarchy |
| :-----------: | -------------------------------------------------------------------------------------------- | :-------: |
|      CSR      | Access to powerful commands such as `/banaccount`                                            |     1     |
|   Sysadmin    | Access to most developer commands such as `/dev_emote`                                       |     2     |
|     Team      | No additional access besides role color and the note on their profile.                       |     3     |
|     Owner     | Access to the permissions of their own world.                                                |     4     |
|     Admin     | Access to the owner's world, but tied to selected commands and permissions set by the owner. |     5     |
|    Builder    | Access to building and breaking blocks/props to the world.                                   |     6     |
| Area Builder  | Same access as Builder but tied to a specific area.                                          |     7     |
| World Booster | Access to specific commands or permissions set by higher heirarchy.                          |     8     |
|    Visitor    | Default permissions.                                                                         |     9     |
|   Spectator   | Spectates the world, lower than default permissions.                                         |    10     |
|    Banned     | No access to the world.                                                                      |    11     |

## World Access Settings

- Default Public (anyone can enter)
  - Set with `/world_public 0` or `/world_public 1`
- Default Access: Read Only
  - Applies to new users in a public world, or those accessing via a world password
  - Set with `/world_access DEFAULT READONLY` or `/world_access DEFAULT MEMBER`
- Default Flying: Anyone
  - Set with `/world_fly NONE` or `/world_fly MEMBER` or `/world_fly ADMIN` or `/world_fly OWNER`
- Default Chat: Readonly Visitors or above
  - Set with `/world_chat SPECTATOR` or `/world_chat READONLY` or `/world_chat MEMBER` or `/world_chat ADMIN` or `/world_chat OWNER`
- Default links allowed to anywhere (effectively allow teleporting by URL)
  - Disallowing teleporting / links to arbitrary locations: `/world_free_pos 0`
- Default Placing Blueprints: Anyone with write access
  - Disallow blueprints from guest editors with `/world_blueprint OWNER`
- Granting access by user ID: `/world_access user_id MEMBER`
  - User's IDs may not be the same as their display names, you can seed the User IDs for people in the current world with `/whoall` or by clicking on a user
- Granting build access by one-time use invite token: `/world_token`
- Granting access by shared password
  - Set a password with `/world_pass correcthorsebatterystaple`
  - Set default access for users entering by password: `/world_pass DEFAULT MEMBER` or `/world_pass DEFAULT READONLY`

## World Access Cookbook

### Private World

- Disallow public access: `/world_public 0`
- Grant access with shared password:
  - `/world_pass password`
  - `/world_access default READONLY` (view only) or `/world_access default MEMBER` (build)
- Or, can also grant access to individuals using `/world_access` or `/world_token` detailed above.

### Everybody Edits

- Allow public access: `/world_public 1`
- Set default access: `/world_access DEFAULT MEMBER`
