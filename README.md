# Luso Delights - Portuguese Restaurant Website

A modern restaurant website for Luso Delights, a Portuguese restaurant offering authentic flavors with a modern twist. This project showcases a complete dining establishment web presence with reservations, menu browsing, catering services, and more.

**This is a fictional Restaurant**

## 📋 Overview

Luso Delights brings the authentic flavors of Portugal to Great Yarmouth. This web application provides potential customers with an engaging online experience, allowing them to:

- Browse the restaurant's menu
- Make online reservations
- Book catering services
- Learn about the restaurant's story
- View featured dishes and special events
- Contact the restaurant

## 🛠️ Tech Stack

This project is built with modern web technologies:

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (React framework with Server Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/) for menu items and reservation storage
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) for UI elements
- **Fonts**: Custom Google Fonts including Mr Dafoe for stylistic elements
- **Animations**: Custom scroll animations and transitions
- **Form Handling**: React state management for forms with validation

## ✨ Features

- **Animated UI Elements**: Scroll animations and hover effects for better UX
- **Online Reservation System**: Form with date/time selection and confirmation
- **Dynamic Menu Display**: Categorized food items with images and descriptions
- **Catering Services**: Information and booking for catering services
- **Restaurant Story**: Background and history of the establishment
- **Social Media Integration**: Links to social platforms
- **Newsletter Subscription**: Customer email collection

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/luso-delights.git
   cd luso-delights

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure
```
/src
  /app             # Next.js app router pages
    /catering      # Catering page
    /menu          # Menu page
    /reservations  # Reservations page
    /story         # Restaurant story page
  /components      # Reusable React components
    /home          # Home-specific components
    Header.js      # Navigation component
    Footer.js      # Footer component
    ScrollAnimation.js # Animation wrapper
/public
  /images          # Image assets
    /banners       # Banner images
    /food          # Food images
```

## 💻 Development Notes
- Built using Next.js App Router architecture
- Uses Tailwind CSS for styling for desktop, mobile reponsiveness in progress
- Implements client-side form validation for reservations
- Uses progressive enhancement for larger displays

## 🎨 Design Choices
- **Color Palette**: Vibrant colors reflecting Portuguese culture
- **Typography**: Combination of modern and stylistic fonts
- **Layout**: Clean, spacious design with focus on food imagery
- **Interactions**: Subtle animations to enhance user experience
- **Accessibility**: Semantic HTML and appropriate contrast ratios

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits
- Images: A combination of unsplash images and Canva AI generated images
- Icons: React Icons library
- Fonts: Google Fonts (Mr Dafoe, etc.)

---

Developed with ❤️ by Mauro Trovoada
