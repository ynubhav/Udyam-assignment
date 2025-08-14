export default function PanVerification() {
  return (
    <div className="rounded-sm box-shadow-sm shadow-sm shadow-gray-500 pb-2 mt-4">
            <div className="flex bg-green-600 text-white text-md px-4 py-3 rounded-t-sm ">
              PAN Verification
            </div>
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="">
                  <div className="font-bold pb-2">
                    3. Type of Organisation / संगठन के प्रकार
                  </div>
                  <input
                    type="text"
                    placeholder="Your Aadhaar No"
                    className="border-1 border-gray-400 rounded-sm py-1 px-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                  />
                </div>
                <div className="">
                  <div className="font-bold pb-2">4.1 PAN/ पैन</div>
                  <input
                    type="text"
                    placeholder="Enter PAN NUMBER"
                    className="border-1 border-gray-400 rounded-sm py-1 px-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                  />
                </div>
                <div className="">
                  <div className="font-bold pb-2">
                    4.1.1 Name of PAN Holder / पैन धारक का नाम
                  </div>
                  <input
                    type="text"
                    placeholder="Name as per PAN"
                    className="border-1 border-gray-400 rounded-sm py-1 px-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                  />
                </div>
                <div className="">
                  <div className="font-bold pb-2">
                    4.1.2 DOB or DOI as per PAN / पैन के अनुसार जन्म तिथि या
                    निगमन तिथि
                  </div>
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="border-1 border-gray-400 rounded-sm py-1 px-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="flex items-start gap-2 my-4 pl-1">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I, the holder of the above PAN, hereby give my consent to
                    Ministry of MSME, Government of India, for using my data/
                    information available in the Income Tax Returns filed by me,
                    and also the same available in the GST Returns and also from
                    other Government organizations, for MSME classification and
                    other official purposes, in pursuance of the MSMED Act,
                    2006.
                  </span>
                </label>
              </div>
              <button
                onClick={() => {
                  setOtpSend(true);
                }}
                className="p-2 bg-[#007bff] transition-colors hover:cursor-pointer hover:bg-blue-700 px-3 text-white rounded-md"
              >
                Pan Validate
              </button>
            </div>
          </div>
  );
}