import { useState } from "react";
import PanVerification from "./panverify";

export default function MainBody() {
  const [otpSend, setOtpSend] = useState(false);
  const [otp, setOtp] = useState("");
  const [aadharentered, setaadharenter] = useState(false);
  const [otpverified, setotpverified] = useState(null);
  const [aadhaarName, setAadhaarName] = useState("");
  const [aadhaarNo, setAadhaarNo] = useState("");
  const [mobileNolastfour, setMobileNolastfour] = useState("8976");
  const [aadharverified, setAadharVerified] = useState(null);
  const [AgreeAadhaar, setAgreeAadhaar] = useState(false);

  return (
    <>
      <div className="min-h-screen mt-16 bg-gray-100 flex flex-col items-center">
        <div className="px-4 py-4 md:px-27 text-indigo-900 w-full">
          <h2 className="text-2xl text-start">
            UDYAM REGISTRATION FORM - For New Enterprise who are not Registered
            yet as MSME
          </h2>
        </div>
        <section className="bg-white text-black px-2 md:px-28 pt-15 pb-1 ">
          <div className="rounded-sm box-shadow-sm shadow-sm shadow-gray-500 pb-2">
            <div className="flex bg-blue-500 text-white text-md px-4 py-3 rounded-t-sm ">
              Aadhaar Verification With OTP
            </div>
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="">
                  <div className="font-bold pb-2">
                    1. Aadhaar Number/ आधार संख्या
                  </div>
                  <input
                    type="text"
                    maxLength={12}
                    minLength={12}
                    onChange={(e) => setAadhaarNo(e.target.value)}
                    disabled={otpSend ? "disabled" : ""}
                    placeholder="Your Aadhaar No"
                    className={`border-1 border-gray-400 rounded-sm py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 text-${
                      otpSend ? "gray-500" : "black"
                    } bg-${otpSend ? "gray-100" : "white"}`}
                  />
                  {aadhaarNo.length == 0 && aadharentered && (
                    <div className="text-red-600">Required</div>
                  )}
                  <div className="mb-2"></div>
                </div>
                <div className="">
                  <div className="font-bold pb-2">
                    2. Name of Entrepreneur / उद्यमी का नाम
                  </div>
                  <input
                    type="text"
                    maxLength={100}
                    minLength={2}
                    onChange={(e) => setAadhaarName(e.target.value)}
                    disabled={otpSend ? "disabled" : ""}
                    placeholder="Name as per Aadhaar"
                    className={`border-1 border-gray-400 rounded-sm py-1 px-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 text-${
                      otpSend ? "gray-500" : "black"
                    } bg-${otpSend ? "gray-100" : "white"}`}
                  />
                  {aadhaarName.length == 0 && aadharentered && (
                    <div className="text-red-600">Required</div>
                  )}
                  <div className="mb-2"></div>
                </div>
              </div>
              <div>
                <ul className="list-disc px-6 py-4 text-md text-gray-800 mb-4">
                  <li>
                    Aadhaar number shall be required for Udyam Registration.
                  </li>
                  <li>
                    The Aadhaar number shall be of the proprietor in the case of
                    a proprietorship firm, of the managing partner in the case
                    of a partnership firm and of a karta in the case of a Hindu
                    Undivided Family (HUF).
                  </li>
                  <li>
                    In case of a Company or a Limited Liability Partnership or a
                    Cooperative Society or a Society or a Trust, the
                    organisation or its authorised signatory shall provide its
                    GSTIN (as per applicability of CGST Act 2017 and as notified
                    by the ministry of MSME{" "}
                    <a
                      href="https://udyamregistration.gov.in/docs/225669.pdf"
                      className="text-blue-600"
                      target="_blank"
                    >
                      vide S.O. 1055(E) dated 05th March 2021
                    </a>
                    ) and PAN along with its Aadhaar number.
                  </li>
                </ul>

                <label className="flex items-start gap-2 mt-4 pl-1">
                  <input
                    type="checkbox"
                    disabled={otpSend ? "disabled" : ""}
                    className={`mt-1 text-${
                      otpSend ? "gray-500" : "black"
                    } bg-${otpSend ? "gray-100" : "white"}`}
                    onChange={(e) => {
                      setAgreeAadhaar(e.target.checked);
                    }}
                  />
                  <span>
                    I, the holder of the above Aadhaar, hereby give my consent
                    to Ministry of MSME, Government of India, for using my
                    Aadhaar number as allotted by UIDAI for Udyam Registration.
                    NIC / Ministry of MSME, Government of India, have informed
                    me that my Aadhaar data will not be stored/shared. / मैं,
                    आधार धारक, इस प्रकार उद्यम पंजीकरण के लिए यूआईडीएआई के साथ
                    अपने आधार संख्या का उपयोग करने के लिए सू0ल0म0उ0 मंत्रालय,
                    भारत सरकार को अपनी सहमति देता हूं। एनआईसी / सू0ल0म0उ0
                    मंत्रालय, भारत सरकार ने मुझे सूचित किया है कि मेरा आधार डेटा
                    संग्रहीत / साझा नहीं किया जाएगा।
                  </span>
                </label>
                {!AgreeAadhaar && aadharentered && (
                  <div className="text-red-600 px-4">
                    You must Agree Declerations.
                  </div>
                )}
                <div className="mb-4"></div>
              </div>
              {!otpSend && !aadharverified && (
                <button
                  onClick={() => {
                    setaadharenter(true);
                    if (
                      aadhaarNo === "" ||
                      aadhaarName === "" ||
                      aadhaarNo.length !== 12 ||
                      aadhaarName.length < 2
                    ) {
                      return;
                    }
                    setOtpSend(true);
                  }}
                  className="p-2 bg-blue-600 transition-colors hover:cursor-pointer hover:bg-blue-700 px-3 text-white rounded-md"
                >
                  Validate & Generate OTP
                </button>
              )}
              {otpSend && !aadharverified && (
                <div>
                  <div className="flex mb-2 font-bold">
                    <p className="text-red-600">*</p>Enter One Time
                    Password(OTP) Code
                  </div>
                  <input
                    type="text"
                    minLength={6}
                    maxLength={6}
                    onChange={(e) => {
                      setOtp(e.target.value);
                    }}
                    placeholder="OTP Code"
                    className="border-1 border-gray-400 rounded-sm py-1 px-2 mb-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                  />
                  <div className="mb-2">
                    OTP has been sent to ******{mobileNolastfour}
                  </div>
                  <button
                    onClick={() => {
                      if (otp.length < 6) return;
                      setAadharVerified(true);
                    }}
                    className="p-2 bg-blue-600 transition-colors hover:cursor-pointer hover:bg-blue-700 px-3 text-white rounded-md"
                  >
                    Validate
                  </button>
                </div>
              )}
              {aadharentered && (
                <div>
                  {aadharverified ? (
                    <div className="py-2 px-4">
                      {"  "}
                      <p className="text-green-600 font-bold">
                        Your Aadhaar has been successfully verified. You can
                        continue Udyam Registration process.
                      </p>
                    </div>
                  ) : (
                    <div className="py-2 px-4 text-red-600 font-bold">
                      <p>Error Code: 998</p>
                      <p>
                        1) There is error in Aadhaar Validation/Authentication.
                      </p>
                      <p>
                        2) Your Aadhaar has not been validated hence you cannot
                        register Udyam.
                      </p>
                      <p>
                        3) Please Visit Your Nearest Aadhaar Enrolment Centre.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* PAN Verification */}
          {aadharverified && <PanVerification />}
        </section>
        <div className="py-4 w-full bg-white">
          <marquee scrollamount="4" behavior="scroll" direction="left">
            <label className="font-bold text-blue-500">
              <a
                href="https://udyamregistration.gov.in/docs/OM_regarding_inclusion_of_Traders02072021.pdf"
                target="_blank"
              >
                Activities (NIC codes) not covered under MSMED Act, 2006 for
                Udyam Registration
              </a>
            </label>
          </marquee>
        </div>
      </div>
    </>
  );
}
