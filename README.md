

# **Drive - File Storage Backend**  

This is a **Node.js + Express.js** backend project that allows users to **upload files** securely using **Firebase Storage** and **MongoDB**.  

---

## **🚀 Features**  
- **JWT Authentication** for secure access.  
- **Multer + Firebase Storage** for file uploads.  
- **MongoDB + Mongoose** for data persistence.  
- **EJS Templating** for rendering views.  
- **Deployable on Render/Vercel** for cloud hosting.  

---

## **🛠️ Tech Stack**  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Authentication**: JWT (jsonwebtoken)  
- **Storage**: Firebase Cloud Storage  
- **Deployment**: Render.com / Vercel  

---

## **📂 Project Structure**  
```
/Drive
│── /models
│   ├── user.model.js        # User Schema (MongoDB)
│   ├── files.model.js       # File Schema (MongoDB)
│── /routes
│   ├── upload.js            # File Upload Routes
│── /middlewares
│   ├── auth.js              # JWT Authentication Middleware
│── /config
│   ├── firebase.config.js   # Firebase Storage Configuration
│   ├── multer.config.js     # Multer Upload Config
│── /views
│   ├── home.ejs             # Frontend Template (EJS)
│── /public
│   ├── styles.css           # Frontend Styles
│── app.js                   # Main Express App
│── .env                     # Environment Variables
│── README.md                # Project Documentation
│── package.json             # Node.js Dependencies
```

---

## **📌 Installation & Setup**  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/drive-backend.git
cd drive-backend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Setup Environment Variables**  
Create a **.env** file and add:  
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_STORAGE_BUCKET=your_firebase_bucket
```

### **4️⃣ Run the Server**
```bash
npm start
```
Server runs at **http://localhost:5000**  

---

## **📤 Uploading Files**  
- **Route:** `POST /upload`  
- **Headers:** `Authorization: Bearer <your_token>`  
- **Form-Data:** `{ file: <your_file> }`  

---

## **🚀 Deployment on Render**  
1. Push your code to **GitHub**  
2. Create a **Render.com** Web Service  
3. Set up **Environment Variables** in Render  
4. Deploy & Access via Render URL  

---

## **🤝 Contributing**  
Feel free to submit PRs or Issues for improvements!  

---

### **📜 License**  
This project is licensed under **MIT License**  

---

