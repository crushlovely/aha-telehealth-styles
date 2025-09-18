export const InfographicsChecklist = () => (
  <div className="c-infographic">
    <div className="c-infographic__header">
      <a
        href="/pdfs/telehealth-checklist.pdf"
        className="c-infographic__pdf-link"
        aria-label="download pdf"
      >
        Download
      </a>
      <div className="c-infographic__header-content">
        <h1 className="c-infographic__title">
          How to Get Ready for a Telehealth Appointment
        </h1>
        <p className="c-infographic__subtitle">
          Here are some tips on how to prepare:
        </p>
      </div>
    </div>
    <div className="c-infographic__checklist">
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <h3>Check your insurance coverage.</h3>
          </label>
          <ul>
            <li>
              Double-check with your health insurance provider beforehand to see
              whether a telehealth visit will be covered.
            </li>
          </ul>
        </li>

        <li>
          <img src="/images/infographics/infographic-tech-device.svg" alt="" />
          <label>
            <input type="checkbox" />
            <h3>Make sure you have the technology you will need.</h3>
          </label>
          <ul>
            <li>
              You'll need a smartphone, tablet or computer with a webcam and a
              good internet connection.
            </li>
            <li>Make sure the device is fully charged or plugged in.</li>
            <li>
              If you haven't used video on the device before your appointment,
              test it to make sure the camera works well for the face-to-face
              conversation.
            </li>
            <li>
              For your telehealth appointment, you may need to use a patient
              portal, mobile app or website link to connect with your doctor.
              Please make sure you have access to the patient portal, app or
              link before your appointment and can comfortably use the
              telehealth technology.
            </li>
          </ul>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            <h3>Choose a quiet, comfortable, well-lit location.</h3>
          </label>
          <ul>
            <li>
              Make sure there's enough light for your health care provider to
              clearly see your face and any physical issues you want to discuss.
            </li>
          </ul>
        </li>

        <li>
          <img
            src="/images/infographics/infographic-headphones.svg"
            className="align-bottom"
            alt=""
          />
          <label>
            <input type="checkbox" />
            <h3>Check your audio.</h3>
          </label>
          <ul>
            <li>
              Using headphones or earbuds can help you hear and give you
              privacy.
            </li>
          </ul>
        </li>

        <li>
          <img src="/images/infographics/infographic-medication.svg" alt="" />
          <label>
            <input type="checkbox" />
            <h3>Prepare for your discussion.</h3>
          </label>
          <ul>
            <li>
              Make notes ahead of time about any questions and/or issues you
              want to discuss.
            </li>
            <li>
              Be ready to say why you want to be seen and what your biggest
              priority for the appointment is.
            </li>
            <li>
              Make a list of the medications and supplements you take
              (prescription as well as over-the-counter).
            </li>
          </ul>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            <h3>
              Be ready to explain your symptoms and any updates on your health.
            </h3>
          </label>
          <ul>
            <li>
              Consider recording your temperature and weight shortly before your
              appointment if a thermometer or scale is available.
            </li>
            <li>
              If you have a fever, what is your temperature and has it changed
              lately?
            </li>
            <li>
              If you have a blood pressure monitor, what is your latest reading?
            </li>
            <li>
              If you keep food, exercise or blood sugar (glucose) records, have
              them ready to share.
            </li>
          </ul>
        </li>

        <li>
          <img
            src="/images/infographics/infographic-blood-pressure.svg"
            alt=""
          />
          <label>
            <input type="checkbox" />
            <h3>Have health devices with you.</h3>
          </label>
          <ul>
            <li>
              Have any medical devices your health care team has prescribed or
              recommended you use with you for the appointment. These might
              include blood pressure monitors or glucose meters.
            </li>
          </ul>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            <h3>Remember to make the most of your time together.</h3>
          </label>
          <ul>
            <li>
              Ask about managing your risks for heart disease, stroke and kidney
              disease.
            </li>
            <li>
              Be ready to make notes about what your health care professional
              recommends and ask questions if anything is unclear to you.
            </li>
          </ul>
        </li>

        <li>
          <img src="/images/infographics/infographic-clipboard.svg" alt="" />
          <label>
            <input type="checkbox" />
            <h3>Other topics you may want to address:</h3>
          </label>
          <ul>
            <li>
              Changes in your medical status. These may include explaining
              symptom changes, or reviewing blood pressure or blood glucose
              logs.
            </li>
            <li>Challenges or questions you may have.</li>
            <li>
              Your medications, when to take them and how to adjust them, if
              needed.
            </li>
            <li>Recent cholesterol numbers.</li>
            <li>Your meal plan and whether to adjust it.</li>
            <li>
              Actions you can take to be more physically active and manage your
              weight.
            </li>
            <li>How much sleep you get each night.</li>
            <li>Quitting smoking or vaping, if applicable.</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);
