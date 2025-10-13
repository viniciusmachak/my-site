# Personal Portfolio - Vinicius Machak

[![Deploy with Vercel](https://vercel.com/button)](https://viniciusmachak.vercel.app/) This is the repository for my personal portfolio, a website built to showcase my projects, skills, and contact information.

**Check out the live version:** [viniciusmachak.vercel.app](https://viniciusmachak.vercel.app/)

---

## 🛠️ Tech Stack

This project was built using the following technologies:

- **React** (with Vite)
- **JavaScript**
- **CSS Modules** (for component-scoped styling)
- **React Router** (for routing)
- **Framer Motion** (for animations)
- **i18next** (for internationalization)
- **EmailJS** (for the contact form)
- **Vercel** (for deployment)

---

## 🚀 Running the Project Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/viniciusmcabral/my-site.git](https://github.com/viniciusmcabral/my-site.git)
    cd my-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    - Create a `.env` file in the project root.
    - Add your EmailJS keys:
      ```
      VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
      VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
      VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
      ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```