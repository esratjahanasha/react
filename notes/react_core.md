### 🔹 what is react?

- React হলো একটা JavaScript library, যেটা মূলত user interface (UI) বানানোর জন্য use করা হয়, বিশেষ করে single-page applications এর জন্য।
  React-এর main concept হলো components — অর্থাৎ app-কে ছোট ছোট reusable অংশে ভাগ করা যায়। ba reusable UI components বানাতে পারো।
  এটা declarative approach use করে, মানে তুমি শুধু বলবে “UI কেমন হবে”, DOM manually handle করতে হবে না।
  React-এর advantage হলো fast, scalable এবং maintainable UI বানানো যায়।

- React হলো JavaScript library যা reusable components ব্যবহার করে UI বানায়, declarative style এ।

**Key Points:**

1. Component-based:
   UI কে ছোট ছোট components-এ ভাগ করা হয়।
   Example: Button, Navbar, Footer, TodoList → প্রতিটা component আলাদা ফাইল/logic থাকতে পারে।

2. Declarative:
   তুমি শুধু বলো UI কেমন দেখতে হবে, React দেখভাল করবে কিভাবে update হবে।
   Example: তুমি বলো count = 5, UI দেখাবে 5; count change করলে React automatically update করবে।

3. Efficient:
   React Virtual DOM ব্যবহার করে, **শুধুমাত্র change হওয়া অংশ update করে।**
   ফলে ওয়েব fast & responsive হয়।

[
**footnotes-**
⚡ Common Interview Question Examples (difference between library and frmework- eita ami bujhi nai,pore bujhbo)

**1. Direct Question:**
What is the difference between a library and a framework?
Explain library vs framework in simple terms.

**2. Scenario-based Question:**
If you are building a web app, when would you use a library and when a framework?

**3. Tricky Question:**
Who controls the flow in a library and who controls the flow in a framework?
What is Inversion of Control in the context of frameworks?

**What is a JavaScript Library?**

- JavaScript library হলো:
  A pre-written set of JS code যা তোমার কাজকে সহজ করে দেয়, তাই তুমি নতুন করে সবকিছু লিখতে হয় না।

Simple Example:
তোমাকে DOM এ element তৈরি, CSS change, event handle করতে হলে সাধারণ JS-তে অনেক কোড লাগে।
jQuery (একটা library) দিয়ে 1 line-এ করা যায়।

- React হলো JS library:
  এর কাজ শুধু UI (view) তৈরি ও manage করা।
  Full website এর logic / state management / routing করতে React ব্যবহার হয়।

**Is React a framework or a library?**

- React is a library, not a framework.
  Library → provides specific functionalities (UI creation)
  Framework → provides complete app structure (like Angular)
  **Tip:** Interviewer চাইতে পারে difference highlight করতে।

**What is Virtual DOM?**

- Virtual DOM holo ekta lightweight copy of the real DOM (Document Object Model).
  অর্থাৎ React browser-er আসল DOM-এর একটা virtual version মেমোরিতে রাখে।
- **যখনই UI-তে কিছু change হয় — React সরাসরি real DOM-এ যায় না, আগে virtual DOM-এ change টা apply করে।**
- **তারপর React compare kore (diffing) দেখে real DOM-এ আসলে কোন অংশটা বদলাতে হবে,**
  **এবং শুধু সেই অংশটাই update করে — পুরোটা না।**

⚡ Why Virtual DOM? (কেন দরকার)

- Real DOM-এ কাজ করা slow, কারণ প্রতিটা change মানে browser-কে re-render করতে হয়।
  React-এর Virtual DOM এই problem-টা solve করে।
- তাই React fast লাগে, কারণ —
- ছোট ছোট change detect করে,
- শুধু necessary অংশটা update করে,
- পুরো page-টা reload হয় না।

🧩 Example (বোঝার মতোভাবে):
ধরো, তুমি একটা shopping list বানিয়েছো-

- Rice
- Oil
- Sugar
- এখন তুমি শুধু Oil-এর জায়গায় Mustard Oil লিখতে চাও।
  👉 React পুরো list আবার লেখে না, শুধু ওই এক শব্দটা বদলায়।
  এই কাজটাই করে Virtual DOM।

]

### 🔹 what is component and why is it used?

- React-এ Component হলো:reusable building blocks(small pices) of ui.
- আরেকভাবে বললে:
  তোমার ওয়েবপেজ অনেকগুলো অংশে ভাগ করা যায় — যেমন Header, Footer, Button, Card ইত্যাদি।
  প্রতিটা অংশকে আলাদা আলাদা Component হিসেবে বানানো হয়।
  প্রতিটা Component নিজের JSX, logic ও style আলাদাভাবে রাখতে পারে।
- react component মুলতো js function হিসেবে থাকে, এবং jsx return করে
- ex:
  function Header() {
  return <h1.>Welcome to My Website</h1.>;
  }
  export default Header;

**- Why we use components-**

- পুনঃব্যবহারযোগ্য কোড (Reusable code):
  একবার component বানালেই অনেক জায়গায় ব্যবহার করা যায়।
- সহজ রক্ষণাবেক্ষণ (Easy maintenance):
  ছোট ছোট অংশে কোড থাকায় bug fix বা update করা সহজ হয়।
- Separation of Concerns:
  Logic, UI এবং styling আলাদা রাখা যায়।
  প্রতিটি Component নিজের কাজ করে, অন্য Component interfere করে না।

### 🔹 what is jsx and its rules?

- JSX basically হলো JavaScript XML, যা React‑এ ব্যবহার হয় UI লিখার জন্য।
- Mane holo, তুমি JavaScript-এর ভিতরে HTML‑like syntax লিখতে পারো, আর React সেটা browser‑friendly JavaScript‑এ convert করে।

- **Rules of JSX:**

**1. return a single root/parent element:**
React-এর component থেকে যখন তুমি JSX return করো,তখন সব element একটা parent element এর ভিতরে থাকতে হবে।

- **or:-** Fragment use করা: function App() {
  return (
  <>
  <h1.>Hello</h1.>
  <p.>World</p.>
  </>
  );
  }
  multiple element return korte hole. <>...</> → React.Fragment, কোনো extra DOM node তৈরি হয় না।

### 🔹what are props?

- Props হলো “properties” বা inputs যেগুলো আমরা parent component থেকে child component-এ পাঠাই।
- Props read-only, অর্থাৎ child component directly change করতে পারে না।
- Props এর মাধ্যমে আমরা dynamic data পাঠাতে পারি।
- **Key Points:**
- Props read-only → child can't modify them.
- Parent থেকে child-এ data পাঠানোর উপায়।
- Dynamic content তৈরি করতে খুব useful।

### 🔹 38-5 Prop types and how to pass/read a prop?

**1. Props কীভাবে pass করা হয় (Passing Props)**

- Parent থেকে child component-এ props পাঠানো হয় (html) attributes এর মাধ্যমে।
  ex: // Child Component
  function Greeting(props) {
  return <h1>Hello, {props.name}! You are {props.age} years old.</h1>;
  }

// Parent Component
function App() {
return <Greeting name="Asha" age={12} />;
}

**2. Props কীভাবে read করা হয় (Reading Props)**

Child component-এ props access করা হয় props object দিয়ে।

ex: function Greeting(props) {
return <p>{props.name} is learning React.</p>;
}
props.name → parent থেকে পাঠানো value পড়বে।

- **Alternative:** Destructuring:

function Greeting({ name, age }) {
return <p>{name} is {age} years old.</p>;
}
এটা অনেক cleaner।
