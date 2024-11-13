---
title: How to share the same profiles and replays between different game devices and game versions
description: This guide will allow you to keep all of your profiles and replays in the same place!
date: "2021-06-19T09:24:40+0000"
edited: "2024-11-13T09:45:00+0000"
author: Windy
---

If you have play on different computers or have multiple versions of the game on the same computer to manage the plethora of mods available nowadays, you may find it troublesome to keep your profiles and replays in sync between all of them. By following the steps in this guide, you will be able to keep all of your profiles and replays in the same place.

To achieve this, We will be using something called symlinks. If you aren't familiar with symlinks, just think of them like a shortcut - the shortcut itself doesn't contain your data, it just points to another location where the actual file resides. The commands for this guide are for Windows, but the process is the same on Linux.

With that out of the way, here's what you need to do:
1. (Optional prerequisite) If you want to sync between computers or simply want a cloud backup, prepare a cloud storage solution which works with files on your desktop. In this example, we will be using **Dropbox**.
2. Make a folder where you want all of your replays/profiles to be stored and note down the path. In this example, it will be `D:\Dropbox\Hisoutensoku`.
3. Navigate to your Hisoutensoku game folder where the `th123.exe` executable is and note down the path. In this example, it will be `D:\Touhou Hisoutensoku`.
4. Copy the **profile** and **replay** directories to `D:\Dropbox\Hisoutensoku` and then delete them from the game directory.
5. Open command prompt as administrator.
6. Enter the command: `mklink /D "D:\Touhou Hisoutensoku\profile" "D:\Dropbox\Hisoutensoku\profile"`, substituting your own paths as needed. \
   The quotes are important if there are any spaces in the path.
7. Enter the command: `mklink /D "D:\Touhou Hisoutensoku\replay" "D:\Dropbox\Hisoutensoku\replay"`, substituting your own paths as needed.
8. Repeat steps 6 & 7 for any other game folders/devices that you'd like to share common profiles/replays with.

Enjoy your newfound convenience, knowing that your decks and replays will always be available no matter which version of the game you're using!
