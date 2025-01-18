import React, { useState, useEffect } from "react";
import "./style1.css";
import { StarCanvas } from "../../components/StarCanvas";

export function Restaurant() {
  const [activeTab, setActiveTab] = useState("food");
  const [popupVisible, setPopupVisible] = useState(false);
  const [countdown, setCountdown] = useState(500);

  useEffect(() => {
    let interval;
    if (popupVisible) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [popupVisible]);

  const openPopup = () => {
    setPopupVisible(true);
    setCountdown(500);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <>
    <StarCanvas />

    <div className="overflow-y-auto scrollbar-none">
        
      <h1>Welcome to Our Restaurant</h1>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "food" ? "active" : ""}`}
          onClick={() => setActiveTab("food")}
        >
          Food
        </button>
        <button
          className={`tab-btn ${activeTab === "drinks" ? "active" : ""}`}
          onClick={() => setActiveTab("drinks")}
        >
          Drinks
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "food" && (
        <div className="tab-content" id="food">
          {/* Food Categories */}
          <h2 className="food-category">Starters</h2>
          <div className="category-container">
            <div className="card">
              <img src="fotos/food1.png" alt="Carpaccio" />
              <div className="overlay">
                <p>Carpaccio</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food2.png" alt="Bruschetta" />
              <div className="overlay">
                <p>Bruschetta</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food3.png" alt="Ceasar Salad" />
              <div className="overlay">
                <p>Ceasar Salad</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food4.png" alt="Caprese Salad" />
              <div className="overlay">
                <p>Caprese Salad</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food5.png" alt="Cheese Platter" />
              <div className="overlay">
                <p>Cheese Platter</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food6.png" alt="Falafel" />
              <div className="overlay">
                <p>Falafel</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="food-category">Main Courses</h2>
          <div className="category-container">
            <div className="card">
              <img src="fotos/food7.png" alt="Steak" />
              <div className="overlay">
                <p>Steak</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food8.png" alt="Pasta" />
              <div className="overlay">
                <p>Pasta</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food9.png" alt="Salmon Fillet" />
              <div className="overlay">
                <p>Salmon Fillet</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food10.png" alt="Risotto" />
              <div className="overlay">
                <p>Risotto</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food11.png" alt="Sushi" />
              <div className="overlay">
                <p>Sushi</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food12.png" alt="Lasagna" />
              <div className="overlay">
                <p>Lasagna</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="food-category">Desserts</h2>
          <div className="category-container">
            <div className="card">
              <img src="fotos/food13.png" alt="Tiramisu" />
              <div className="overlay">
                <p>Tiramisu</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food14.png" alt="Crème Brûlée" />
              <div className="overlay">
                <p>Crème Brûlée</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food15.png" alt="Apple Pie" />
              <div className="overlay">
                <p>Apple Pie</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food16.png" alt="Chocolate Mousse" />
              <div className="overlay">
                <p>Chocolate Mousse</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food17.png" alt="Cheesecake" />
              <div className="overlay">
                <p>Cheesecake</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/food18.png" alt="Panna Cotta" />
              <div className="overlay">
                <p>Panna Cotta</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Drinks Tab */}
      {activeTab === "drinks" && (
        <div className="tab-content" id="drinks">
          {/* Drinks Categories */}
          <h2 className="drinks-category">Wine</h2>
          <div className="category-container">
            <div className="card">
              <img src="fotos/drink1.png" alt="Chardonnay" />
              <div className="overlay">
                <p>Chardonnay</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/drink2.png" alt="Sauvignon Blanc" />
              <div className="overlay">
                <p>Sauvignon Blanc</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/drink3.png" alt="Rosé" />
              <div className="overlay">
                <p>Rosé</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="drinks-category">Beer</h2>
          <div className="category-container">
            <div className="card">
              <img src="fotos/drink4.png" alt="Amstel" />
              <div className="overlay">
                <p>Amstel</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/drink5.png" alt="Heineken" />
              <div className="overlay">
                <p>Heineken</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/drink6.png" alt="Pilsner" />
              <div className="overlay">
                <p>Pilsner</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="drinks-category">Cocktails</h2>
          <div className="category-container">
            <div className="card">
              <img src="fotos/drink7.png" alt="Margarita" />
              <div className="overlay">
                <p>Margarita</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/drink8.png" alt="Mojito" />
              <div className="overlay">
                <p>Mojito</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="card">
              <img src="fotos/drink9.png" alt="Piña Colada" />
              <div className="overlay">
                <p>Piña Colada</p>
                <button className="order-btn" onClick={openPopup}>
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup */}
      {popupVisible && (
        <div id="popup" className="popup">
          <div className="popup-content">
            <h2>
              Your order is being prepared and will arrive shortly. It will be
              delivered to you.
            </h2>
            <p>Estimated wait time: {formatTime(countdown)}</p>
            <button id="close-popup" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
