import whatsapp_bubble from '../assets/whatsapp_bubble.webp'
import antivirus_bubble from '../assets/antivirus_bubble.webp'
import rupee_bubble from '../assets/rupee_bubble.webp'
import appScreen1 from '../assets/app_screen_1.webp'


const MiddleSection2 = () => {
  return (
    <div className="bg-black text-white py-28 px-4">
      <div className="text-3xl flex flex-col md:flex-row gap-4 justify-between items-center max-w-6xl mx-auto mb-24">
        <p className="max-md">
          We've all heard of instant groceries, now say hello to instant credit.
          <span className="text-gray-400">
            0% hassle, 100% paperless. Get your Uni Card instantly.
          </span>
        </p>
        <img
          className="w-96"
          src={appScreen1}
          alt='as1'
        />
      </div>

      <div className="text-3xl flex  flex-col md:flex-row gap-4 justify-between items-center max-w-6xl mx-auto mb-24">
        <p className="max-md">
          With Uni, you're always in control.
          <span className="text-gray-400">
            Set your own payment limits. Choose how and where you spend. Lock
            and unlock your card. All right from the app.
          </span>
        </p>
        <img
          className="w-96"
          src={appScreen1}     
          alt="appScreen"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto mb-12">
        <p className="flex-1 text-2xl">
          <img
            className="w-20 mb-10 mx-auto md:mx-0"
            src={whatsapp_bubble}
            alt='whatsapp'
          />
          Help, just a WhatsApp away. Anytime, Anyday.
          <span className="text-xl text-gray-400">
            During hectic work hours. On lazy sunday mornings. In the thick of
            night. Anytime. flex-col md:flex-row gap-4
          </span>
        </p>
        <p className="flex-1 text-2xl">
          <img
            className="w-20 mb-10 mx-auto md:mx-0"
            src={rupee_bubble}
            alt='bubble'
          />
          No hidden charges, no last minute surprises.
          <span className="text-xl text-gray-400">
            100% money back guarantee if a charge is applied without your
            knowledge.
          </span>
        </p>
        <p className="flex-1 text-2xl">
          <img
            className="w-20 mb-10 mx-auto md:mx-0"
            src={antivirus_bubble}
            alt="virus"
          />
          Super secure. Because we care about your money.
        </p>
      </div>
    </div>
  );
};

export default MiddleSection2;
