const INITIAL_STATE = {
  items: [
    {
      id: 2,
      name: 'IPhone',
      image: 'http://www.pngmart.com/files/2/IPhone-Apple-PNG-File.png',
      price: 500
    },
    {
      id: 3,
      name: 'Google Pixel',
      image: 'http://www.stickpng.com/assets/images/58aefac1c869e092af51ee68.png',
      price: 400
    },
    {
      id: 4,
      name: 'Macbook',
      image: 'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bfd5.png',
      price: 1200
    },
    {
      id: 5,
      name: 'Mouse',
      image: 'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf9c.png',
      price: 20
    },
    {
      id: 6,
      name: 'Keyboard',
      image: 'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bfce.png',
      price: 20
    },
    {
      id: 7,
      name: 'Surface Pro',
      image: 'http://www.stickpng.com/assets/images/588526af6f293bbfae451a38.png',
      price: 1000
    },
    {
      id: 8,
      name: 'Monitor',
      image: 'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bfe2.png',
      price: 200
    },
    {
      id: 9,
      name: 'Samsung S7',
      image: 'http://www.stickpng.com/assets/images/58ac4b940aaa10546adf2706.png',
      price: 400
    }
  ],
  listType: 'grid'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_LIST_TYPE':
      return { ...state, listType: action.payload }
    default:
      return state;
  }
}