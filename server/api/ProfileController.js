
const ProfileController = {
  index: (req, res) => {
    const id = req.params.id
    if (id) {
      const data = {
        cover_photo: {
          id: 'f6335ca2-4456-4045-8125-15fcbef009b9',
          url: 'https://img00.deviantart.net/8bb7/i/2012/349/2/b/techno_wallpaper_2_0_hd_by_gredius-d5o48do.jpg'
        },
        avatar_photo: {
          id: '0e9bf86c-d46e-4d22-b26f-bd58d1fe6a12',
          url: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ginger-guy.png'
        },
        first_name: 'Harry',
        last_name: 'Gibsons',
        description: '',
        followers: 500000,
        following: 0,
        is_following: true
      }
      const responseData = {
        id,
        data,
        code: 200,
        status: 'OK',
      }
      res.send(responseData)
    } else {
      const responseError = {
        error: {
          message: 'User ID is not found'
        },
        code: 500,
        status: 'Error'
      }
      res.send(responseError)
    }
  },
  update: (req, res) => {
    const data = req.body
    if (data.description) {
      const responseData = {
        data,
        code: 200,
        status: 'OK',
      }
      res.send(responseData)
    } else {
      const responseError = {
        error: {
          message: 'Update Profile Error'
        },
        code: 500,
        status: 'Error'
      }
      res.send(responseError)
    }
  }
}

module.exports = ProfileController
