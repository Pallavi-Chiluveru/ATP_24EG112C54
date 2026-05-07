# Week 02: Advanced JavaScript Concepts & Backend Basics

This week focuses on advanced JavaScript features including higher-order array methods, ES6 modules, Class-based Object-Oriented Programming (OOP), and an introduction to API development and asynchronous timer functions.

## Directory Structure

```text
Week_02/
├── A_01_AdvancedArrayMethods/       # Functional Programming with Arrays
│   ├── bankTransactionAnalyzerQues5.js
│   ├── employeePayrollProcessorQues3.js
│   ├── movieRecommendationSystemQues4.js
│   ├── shoppingCartSummaryQues1.js
│   └── studentPerformanceDashboardQues2.js
├── A_02_Modules/                     # ES6 Modules & System Architecture
│   ├── E-CommerceShoppingQues2/     # Multi-module E-commerce System
│   └── TaskManagementSystemQues1/    # Task Validation & Management
├── A_03_ClassDemo/                   # Object-Oriented Programming
│   └── LibraryBookManagementSystemQues1.js
├── A_04_Spread operator_Rest parameter/ # Modern ES6+ Syntax
│   ├── CopyAndExtendArrayQues1.js
│   ├── Ques3.js
│   └── UpdatedUserQues2.js
├── A_05_API_Backend_product/         # Backend Development Basics
│   ├── productAPI.js
│   ├── productModel.js
│   ├── server.js
│   └── req.http
└── A_06_TimerFunctionsDemo/          # Asynchronous JavaScript
    ├── ExamPortalSimulatorQues1.js
    └── OTPCountDownSimulatorQues2.js
```

## Folder Details

### 1. A_01_AdvancedArrayMethods
Uses `map()`, `filter()`, `reduce()`, and `find()` to solve complex data processing tasks.
- **Bank Transaction Analyzer**: Filters and summarizes financial data.
- **Employee Payroll Processor**: Calculates net salaries after deductions.
- **Student Performance Dashboard**: Aggregates grades and identifies top performers.

### 2. A_02_Modules
Demonstrates code modularity and separation of concerns.
- **E-Commerce Shopping**: Separate modules for products, cart, payments, and discounts.
- **Task Management**: Validates task inputs and manages state across files.

### 3. A_03_ClassDemo
Focuses on **Classes**, **Inheritance**, and **Encapsulation**.
- **Library Management**: Manages books, users, and borrowing logic using JavaScript Classes.

### 4. A_04_Spread & Rest Operators
Mastering the `...` syntax for immutable data updates.
- Deep copying arrays and merging objects without mutating original data.

### 5. A_05_API_Backend_product
An introduction to backend logic.
- **server.js**: Entry point for the backend service.
- **productAPI.js**: Handles CRUD operations for product data.
- **req.http**: Sample HTTP requests to test the API.

### 6. A_06_TimerFunctionsDemo
Working with asynchronous timers.
- **Exam Portal**: Automatically submits exams using `setTimeout()`.
- **OTP Countdown**: Real-time countdown clock using `setInterval()`.

## How to Run
Navigate to the specific folder and run:
```bash
node <A_01_AdvancedArrayMethods>/*.js
node <A_02_Modules>/*.js
node <A_03_ClassDemo>/*.js
node <A_04_Spread operator_Rest parameter>/*.js
node <A_05_API_Backend_product>/*.js
node <A_06_TimerFunctionsDemo>/*.js
```
For the API project, ensure dependencies are installed:
```bash
cd A_05_API_Backend_product
npm install
node server.js
```
