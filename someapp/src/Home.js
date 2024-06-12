import React, { useState, useEffect } from 'react';
import './Home.css';
import defaultImage from './defaultImage.avif'; // Import a default background image

const Home = () => {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preloadedItems, setPreloadedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Preloaded items with addresses that change every time
    const randomItems = [
      {
        id: Math.random().toString(36).substr(2, 9),
        img: 'https://hidesign.com/cdn/shop/files/8903439877910_2.jpg?v=1717408996',
        description: 'Lost Wallet',
        address: '123 Main St, City, Country',
        phoneNumber: '+1234567890',
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        img: 'https://m.media-amazon.com/images/I/71tCOhEigtL._SL1500_.jpg',
        description: 'Missing Phone',
        address: '456 Park Ave, Town, Country',
        phoneNumber: '+1987654321',
      },
      {
        id: Math.random().toString(36).substr(2, 9),
        img: 'https://www.welovekeys.co.uk/wp-content/uploads/2021/03/Federal-Keys.jpg',
        description: 'Lost Keys',
        address: '789 Elm St, Village, Country',
        phoneNumber: '+1122334455',
      },
    ];
    setPreloadedItems(randomItems);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newItem = {
          id: serialNo,
          img: reader.result,
          description: description,
          address: address,
          phoneNumber: phoneNumber,
        };
        setItems(prevItems => [...prevItems, newItem]);
        checkForMatch(newItem);
        setDescription('');
        setSerialNo('');
        setAddress('');
        setPhoneNumber('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    if (description && serialNo && address && phoneNumber) {
      document.getElementById('imageInput').click();
    } else {
      alert('Please enter a description, serial number, address, and phone number.');
    }
  };

  const handleClearItems = () => {
    setItems([]);
  };

  const checkForMatch = (newItem) => {
    preloadedItems.forEach(item => {
      if (item.description === newItem.description || item.id === newItem.id) {
        alert('Match found with preloaded items: ' + item.description);
      }
    });
  };

  const handleSearch = () => {
    setSearchQuery(serialNo);
  };

  const filteredItems = preloadedItems.filter(item =>
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container" style={{ backgroundImage: `url(${defaultImage})` }}>
      <div className="home-content">
        <h1>Welcome to the Lost & Found</h1>
        <p>Find your lost belongings here. Browse through the list of items and get them back.</p>
        <div className="upload-form">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Serial No"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleAddItem}>Upload Photo</button>
          <button onClick={handleClearItems}>Clear Items</button>
          <input
            type="file"
            id="imageInput"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by Serial No"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      <div className="items-gallery">
        <h2>Preloaded Items</h2>
        {filteredItems.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.img} alt={item.description} />
            <div className="item-info">
              <h3>{item.description}</h3>
              <p>Serial No: {item.id}</p>
              <p>Address: {item.address}</p>
              <p>Phone: {item.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="items-gallery">
        <h2>User Uploaded Items</h2>
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.img} alt={item.description} />
            <div className="item-info">
              <h3>{item.description}</h3>
              <p>Serial No: {item.id}</p>
              <p>Address: {item.address}</p>
              <p>Phone: {item.phoneNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
