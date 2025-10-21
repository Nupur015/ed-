module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1B4332", // deep-forest-green
          50: "#F0F7F4", // deep-forest-green-50
          100: "#D4E8DC", // deep-forest-green-100
          200: "#A9D1B8", // deep-forest-green-200
          300: "#7EBA95", // deep-forest-green-300
          400: "#53A371", // deep-forest-green-400
          500: "#2E5A42", // deep-forest-green-500
          600: "#1B4332", // deep-forest-green-600
          700: "#163529", // deep-forest-green-700
          800: "#112720", // deep-forest-green-800
          900: "#0C1917", // deep-forest-green-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#FF8500", // vibrant-saffron
          50: "#FFF4E6", // vibrant-saffron-50
          100: "#FFE4B8", // vibrant-saffron-100
          200: "#FFD485", // vibrant-saffron-200
          300: "#FFC452", // vibrant-saffron-300
          400: "#FFB41F", // vibrant-saffron-400
          500: "#FF8500", // vibrant-saffron-500
          600: "#E6770A", // vibrant-saffron-600
          700: "#CC6914", // vibrant-saffron-700
          800: "#B35B1E", // vibrant-saffron-800
          900: "#994D28", // vibrant-saffron-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#2E86AB", // professional-blue
          50: "#EBF5FA", // professional-blue-50
          100: "#C7E2F0", // professional-blue-100
          200: "#8FC5D9", // professional-blue-200
          300: "#57A8C2", // professional-blue-300
          400: "#2E86AB", // professional-blue-400
          500: "#296F8F", // professional-blue-500
          600: "#245873", // professional-blue-600
          700: "#1F4157", // professional-blue-700
          800: "#1A2A3B", // professional-blue-800
          900: "#15131F", // professional-blue-900
        },
        // Background Colors
        background: "#FEFEFE", // near-white
        surface: "#F8F9FA", // light-gray
        // Text Colors
        "text-primary": "#212529", // near-black
        "text-secondary": "#6C757D", // medium-gray
        // Status Colors
        success: {
          DEFAULT: "#28A745", // standard-green
          50: "#E8F5E8", // standard-green-50
          100: "#C3E6C3", // standard-green-100
          200: "#9DD69D", // standard-green-200
          300: "#77C677", // standard-green-300
          400: "#51B651", // standard-green-400
          500: "#28A745", // standard-green-500
          600: "#228B3C", // standard-green-600
          700: "#1C6F33", // standard-green-700
          800: "#16532A", // standard-green-800
          900: "#103721", // standard-green-900
        },
        warning: {
          DEFAULT: "#FFC107", // amber
          50: "#FFFBF0", // amber-50
          100: "#FFF3C4", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFCD3C", // amber-300
          400: "#FFC107", // amber-400
          500: "#FFB300", // amber-500
          600: "#FF8F00", // amber-600
          700: "#FF6F00", // amber-700
          800: "#E65100", // amber-800
          900: "#BF360C", // amber-900
        },
        error: {
          DEFAULT: "#DC3545", // standard-red
          50: "#FDF2F2", // standard-red-50
          100: "#FCE4E6", // standard-red-100
          200: "#FECACA", // standard-red-200
          300: "#FCA5A5", // standard-red-300
          400: "#F87171", // standard-red-400
          500: "#DC3545", // standard-red-500
          600: "#DC2626", // standard-red-600
          700: "#B91C1C", // standard-red-700
          800: "#991B1B", // standard-red-800
          900: "#7F1D1D", // standard-red-900
        },
        // Border Colors
        border: "#E9ECEF", // neutral-gray
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'lg': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'lg': '8px',
        'md': '6px',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      minHeight: {
        '44': '44px',
      },
      minWidth: {
        '44': '44px',
      },
    },
  },
  plugins: [],
}