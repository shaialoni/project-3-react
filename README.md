# project-3-react
Image Upload (Inspired by Intagram)

User story
-As an unregistered user, I would like to view all images
-As an unregistered user, I would like to sign up with email and password.
-As a registered user, I would like to sign in with email and password.
-As a signed in user, I would like to change password.
-As a signed in user, I would like to sign out.
-As a signed in user, I would like to upload an image to AWS with a name
-As a signed in user, I would like to update the name of my image on AWS.
-As a signed in user, I would like to see all my images on AWS.
-As a signed in user, I would like to see the thumbnail of all images on AWS.
-As a signed in user, I would like to delete the reference of my image from the database.
-As a signed in user, I would like to see the following data for any image:
    -date created/uploaded
    -date modified
    -owner (user who uploaded the image)
    -name


Reach goals
-As an unregistered user, I would like to download any image
-As a signed in user, I would like to 'like' images
-As a signed in user, I would like to 'unlike' images
-As a signed in user, I would like to comment on images
    -...I would like to delete owner's comments
    -...I would like to update owner's comments

Schema
    -Post
        -title: string
        -caption: string
        -image: 
        -timestamp:
        -owner:
        -like: boolean


