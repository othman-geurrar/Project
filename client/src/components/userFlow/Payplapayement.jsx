import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function Paypal() {
  const initialOptions = {
    clientId:
      "AX8RfL36yX8sDZmaYopQxXYnqptUMSXIYFVofVCqHXjYSGkbCC8HB1OrE_1OK3v7eI7qEpSULQYvSRtI",
  };
  const styles = { shape: "rect", layout: "vertical" };
  return (
    <div className="App">
      {" "}
      <PayPalScriptProvider options={initialOptions}>
        {" "}
        <PayPalButtons style={styles} />{" "}
      </PayPalScriptProvider>{" "}
    </div>
  );
}