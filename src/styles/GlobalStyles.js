import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Poppins', sans-serif !important;
} /*10px*/


:root {
  /* colors */
  --whats-app-wa-primary: #077DB1;
  --whats-app-wa-primary-hover: #0973A2;
  --whats-app-wa-vector-bg: #B2E3EE;
  --whats-app-wa-secondary: #E6F2F7;
  --whats-app-wa-teritiary: #D7EBF4;

  // black
  --whats-app-wa-black: #252525;
  --whats-app-wa-overlay: rgba(0, 0, 0, 0.30);
  --whats-app-wa-white: #FFF;


  --whats-app-grey-900: #4F4F4F;
  --whats-app-grey-800: #808080;
  --whats-app-grey-600: #CACACA;
  --whats-app-grey-400: #E8E8E8;
  --whats-app-grey-300: #EFF2F5;
  --whats-app-wabg: #F7F7FA;
  --whats-app-grey-200: #FAFCFD;

  --whats-app-message-blue: #006895;
  --whats-app-success-green: #47AC2B;
  --whats-app-danger-red: #D72121;
  --whats-app-danger-red-hover: #C01C1C;

  --whats-app-blue-dim: #EBFAFF;
  --whats-app-green-dim: #EBFFF0;
  --whats-app-red-dim: #FFECEC;

  --theme-colors-theme-secondary: #53667B;

  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.2s ease-in-out all;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
  background: var(--backgroundColor);
  line-height: 1;
  color: var(--textColor);
  font-family: 'Poppins', sans-serif !important;
}
p {
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 !important;;
  line-height: 1 !important;;
  font-family: 'Poppins', sans-serif !important;
  overflow-wrap: break-word;
  hyphens: auto;
}

h1 {
  font-size: 4.8rem !important;;
}

h2 {
  font-size: 3.2rem !important;;
}

h3 {
  font-size: 2.4rem !important;
}

h4 {
  font-size: 1.8rem !important;
}

h5 {
  font-size: 1.6rem !important;
}

h6{
  font-size: 1.4rem !important;
}

.label{
  font-size: 1.2rem !important;
  font-family: 'Poppins', sans-serif !important;
}

.sp-8t{
  padding-top: 8px !important;
}
.sp-16t{
  padding-top: 16px !important;
}
.sp-24t{
  padding-top: 24px !important;
}
.sp-32t{
  padding-top: 32px !important;
}
.sp-40t{
  padding-top: 40px !important;
}

.sp-8b{
  padding-bottom: 8px !important;
}
.sp-16b{
  padding-bottom: 16px !important;
}
.sp-24b{
  padding-bottom: 24px !important;
}
.sp-32b{
  padding-bottom: 32px !important;
}
.sp-48b{
  padding-bottom: 40px !important;
}

.sp-8y{
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.sp-16y{
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}
.sp-24y{
  padding-top: 24px !important;
  padding-bottom: 24px !important;
}
.sp-32y{
  padding-top: 32px !important;
  padding-bottom: 32px !important;
}
.sp-40y{
  padding-top: 40px !important;
  padding-bottom: 40px !important;
}


.sp-8t-m{
  margin-top: 8px !important;
}
.sp-16t-m{
  margin-top: 16px !important;
}
.sp-24t-m{
  margin-top: 24px !important;
}
.sp-32t-m{
  margin-top: 32px !important;
}
.sp-40t-m{
  margin-top: 40px !important;
}

.sp-8b-m{
  margin-bottom: 8px !important;
}
.sp-16b-m{
  margin-bottom: 16px !important;
}
.sp-24b-m{
  margin-bottom: 24px !important;
}
.sp-32b-m{
  margin-bottom: 32px !important;
}
.sp-40b-m{
  margin-bottom: 40px !important;
}

.sp-8y-m{
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}
.sp-16y-m{
  margin-top: 16px !important;
  margin-bottom: 16px !important;
}
.sp-24y-m{
  margin-top: 24px !important;
  margin-bottom: 24px !important;
}
.sp-32y-m{
  margin-top: 32px !important;
  margin-bottom: 32px !important;
}
.sp-40y-m{
  margin-top: 40px !important;
  margin-bottom: 40px !important;
}

.four{
  font-weight: 400 !important;
  font-style: normal !important;
  line-height: 120% !important;
}
.five{
  font-weight: 500 !important;
  font-style: normal !important;
  line-height: 120% !important;
}
.six{
  font-weight: 600 !important;
  font-style: normal !important;
  line-height: 120% !important;
}

.text {
  margin-bottom: 1.5rem !important;
  max-width: 40em !important;
}

small,
.text-small {
  font-size: var(--small-text);
}

a {
  text-decoration: none !important;
}
ul {
  list-style-type: none !important;
  padding: 0 !important;
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
}
/* buttons */

.btn-regular {
  outline: none;
  border: none;
  cursor: pointer;
  color: var(--whats-app-wa-white);
  transition: var(--transition);
  border-radius: 0.5rem;
  background: var(--whats-app-wa-primary);
  display: inline-flex;
  height: 4rem;
  min-width: 15rem;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}
.btn-regular:hover {
  background: var(--whats-app-wa-primary-hover);
}

.btn-small{
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  height: 4rem;
  min-width: 12rem;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  border-radius: 0.5rem;
  min-width: 12rem;
  background: var(--whats-app-danger-red);
}

.btn-small:hover{
  border-radius: 0.5rem;
  background: var(--whats-app-danger-red-hover);
}

.btn-block {
  width: 100%;
}

.text-input{
  display: flex;
  outline: none;
  padding: 1.1rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--whats-app-wa-primary);
  background: #FFF;
}
.black{
  color: var(--whats-app-wa-black);
}
.error-input{
  border: 1px solid var(--whats-app-danger-red);
}
.error-text{
  color: var(--whats-app-danger-red) !important;
}
.validation-error{
  font-weight: 400;
  font-size: 12px;
  color:  var(--whats-app-danger-red) !important;;
}


img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
