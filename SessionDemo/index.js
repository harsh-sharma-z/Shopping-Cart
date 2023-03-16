const express = require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const productRouter=require('./routes/productRoutes');
const reviewRouter=require('./routes/reviewRoutes');
const methodOverride=require('method-override');
const cookieParser=require('cookie-parser');


