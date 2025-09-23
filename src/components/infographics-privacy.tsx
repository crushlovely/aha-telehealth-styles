export const InfographicsPrivacy = () => (
  <div className="c-infographic">
    <div className="c-infographic__header">
      <a
        href="/pdf/privacy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="c-infographic__pdf-link"
        aria-label="download pdf"
      >
        Download
      </a>
      <div className="c-infographic__header-content">
        <h1 className="c-infographic__title">
          Common Concerns & Facts on Telehealth
        </h1>
        <p className="c-infographic__subtitle">
          Telehealth is safe, and your privacy is protected just like in an
          in-person visit.
        </p>
      </div>
    </div>
    <div className="c-infographic__privacy">
      <table>
        <caption>Telehealth Privacy Concerns and Facts</caption>
        <thead>
          <tr>
            <th scope="col">Concerns</th>
            <th scope="col">The Facts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="/images/infographics/infographic-hack-shield.svg"
                alt=""
              />
              <em>&ldquo;Someone could hack my visit.&rdquo;</em>
            </td>
            <td>
              <p>
                Telehealth uses secure technology to keep your video call
                private and protected.
              </p>
              <p>
                <strong>Safety tip:</strong> Use your own personal device
                (smartphone, tablet or computer) on a secure Internet connection
                (Wi-Fi or data plan).
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="/images/infographics/infographic-listening.svg"
                alt=""
              />
              <em>&ldquo;Someone might hear my private information.&rdquo;</em>
            </td>
            <td>
              <p>
                Your visit and messages are turned into unreadable code, so no
                one else can access them. Only you and your doctor can see and
                hear your visit.
              </p>
              <p>
                <strong>Safety tip:</strong> Log out after your visit, and do
                not share your password with anyone.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/infographics/infographic-lock.svg" alt="" />
              <em>
                &ldquo;My information might be shared without my
                permission.&ldquo;
              </em>
            </td>
            <td>
              <p>
                Telehealth services must follow HIPAA (Health Insurance
                Portability and Accountability Act) laws to keep your
                information private and safe. Your doctor cannot share your
                information without your consent, unless it is needed for safety
                or required by law.
              </p>
              <p>
                The doctor&apos;s notes from your visit, your test results, and
                messages are stored in secured portals that are
                password-protected for only you and your health care team to
                access.
              </p>
              <p>
                <strong>Safety tip:</strong> Be sure to read and understand the
                consent (HIPAA) forms you sign, so you know what communication
                preferences you have chosen.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/infographics/infographic-eye.svg" alt="" />
              <em>&ldquo;Telehealth doesn&apos;t feel private.&rdquo;</em>
            </td>
            <td>
              <p>
                Privacy for your telehealth appointment depends on where you
                have your visit. Good options may be a bedroom, a private
                outside porch or inside your parked car.
              </p>
              <p>
                <strong>Safety tip:</strong> Before your telehealth visit, find
                a quiet, private place. Use earbuds or headphones.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
