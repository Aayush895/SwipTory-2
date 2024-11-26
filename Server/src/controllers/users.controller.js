// Signin user:
// 1.) Get user data from client side as req object
// 2.) Uplaod the profile pic (From client -> Server (using multer) -> Cloud (On cloudinary))
// 3.) Validate the incoming data using zod
// 4.) Send the data to service layer
// 5.) Send the data to repositoy layer for uploading it on db & return the response data
// 6.) Send the response data from service layer to controller
// 7.) Send the response from controller to client
// NOTE: Proper error handling should be done from server side

function signinUser(req, res, next) {
  const {username, email, password, profilePic} = req.body
  
}

function loginUser(req, res, next) {}
function editUser(req, res, next) {}
function deleteUser(req, res, next) {}

export { signinUser, loginUser, editUser, deleteUser };
