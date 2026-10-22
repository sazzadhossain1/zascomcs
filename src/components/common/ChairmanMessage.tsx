import Image from "next/image";
import styles from "./ChairmanMessage.module.css";

export default function ChairmanMessage() {
  return (
    <article className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>LEADERSHIP MESSAGE</span>

          <h2>Message from the President</h2>

          <div className={styles.line} />
        </div>

        <div className={styles.profile}>
          <div className={styles.photoColumn}>
            <div className={styles.photoFrame}>
              <Image
                src="/images/zascomcs-chairman.png"
                alt="Portrait of the Chairman"
                width={1024}
                height={1536}
                className={styles.photo}
                priority
              />
            </div>

            <div className={styles.identity}>
              <h3>Md. Shahidul Islam</h3>
              <span>President</span>
              <p>
                ZASCO Multipurpose
                <br />
                Cooperative Society
              </p>
            </div>
          </div>

          <div className={styles.message}>
            <div className={styles.quoteMark}>“</div>

            <p className={styles.greeting}>
              Assalamu Alaikum and Warm Greetings to All,
            </p>

            <p>
              It is with immense pleasure, pride, and a profound sense of
              responsibility that I welcome you to the official digital home of
              ZASCO Multipurpose Cooperative Society.
            </p>

            <p>
              Our society is founded on a simple yet powerful belief: unity,
              mutual cooperation, and shared prosperity can transform individual
              aspirations into collective achievements. We envision a community
              where people from diverse backgrounds come together, not merely to
              pursue financial success, but to create meaningful opportunities,
              strengthen mutual trust, and contribute to the well-being of
              society.
            </p>

            <p>
              At ZASCO Multipurpose Cooperative Society, our mission extends
              beyond conventional savings and investments. We aspire to
              establish a transparent, technology-driven, and professionally
              managed cooperative platform that enables members to participate
              in promising business ventures, including real estate, information
              technology, agriculture, and other productive sectors. Through
              responsible investments and collective efforts, we seek to
              generate sustainable financial benefits while promoting social
              welfare and humanitarian initiatives.
            </p>

            <p>
              We firmly believe that true prosperity is not measured solely by
              individual wealth, but by the positive impact we create in the
              lives of others. By combining our resources, knowledge,
              experience, and goodwill, we can build a stronger financial
              foundation for our members while extending a helping hand to those
              in need.
            </p>

            <p>
              Transparency, accountability, democratic participation, and mutual
              respect shall remain at the heart of our organization. With the
              support of modern technology and the active involvement of our
              members, we are committed to building an institution where every
              contribution matters, every voice is valued, and every achievement
              is shared.
            </p>

            <p>
              As President, I sincerely invite all our members and well-wishers
              to join us in this journey of cooperation, growth, and service to
              humanity. Together, let us build an institution that represents
              financial empowerment, social responsibility, and a lasting legacy
              for future generations.
            </p>

            <div className={styles.highlight}>
              Together We Grow, Together We Prosper, Together We Serve.
            </div>

            <p>
              May Almighty Allah guide our endeavors, bless our collective
              efforts, and grant us the wisdom and integrity to fulfill our
              responsibilities.
            </p>

            <p>Thank you, and welcome to the ZASCO family.</p>

            <div className={styles.signature}>
              <p>Warm regards,</p>

              <h3>Md. Shahidul Islam</h3>
              <strong>President</strong>
              <span>ZASCO Multipurpose Cooperative Society</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
