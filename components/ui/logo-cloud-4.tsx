import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud4() {
  return (
    <section className="bg-background py-20">
      <div className="m-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Technologies
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 items-center justify-items-center">
          
          {/* === Cloud & Data === */}
          <img className="h-20 filter grayscale dark:invert" src="/mongo.svg" alt="MongoDB" />
          <img className="h-20" src="/CouchDB.svg" alt="CouchDB" />
          <img className="h-20" src="/Oracle.svg" alt="Oracle" />
          <img className="h-20 filter grayscale dark:invert" src="/Apache Cassandra.svg" alt="Cassandra" />
          <img className="h-20" src="/Google Cloud.svg" alt="Google Cloud" />
          {/* <img className="h-20" src="/Red Hat.svg" alt="Red Hat" /> */}
          <img className="h-20" src="/Jenkins.svg" alt="Jenkins" />

          {/* === Languages === */}
          <img className="h-20" src="/python.svg" alt="Python" />
          {/* <img className="h-20" src="/C++ (CPlusPlus).svg" alt="C++" /> */}
          <img className="h-20" src="/Go.svg" alt="Go" />
          <img className="h-20" src="/r.svg" alt="R" />
          <img className="h-20 filter grayscale dark:invert" src="/postgresql-ar21.svg" alt="PostgreSQL "  />
          <img className="h-20" src="/ts.svg" alt="TypeScript" />

          {/* === Frameworks / Tools === */}
          {/* <img className="h-20" src="/django.svg" alt="Django" /> */}
          <img className="h-20 filter grayscale dark:invert" src="/Express.svg" alt="Express.js" />
          <img className="h-20" src="/FastAPI.svg" alt="FastAPI" />
          <img className="h-20" src="/react-svgrepo-com.svg" alt="React" />
          <img className="h-20" src="/nextjs.svg" alt="Next.js" />
          <img className="h-20" src="/Electron.svg" alt="Electron" />
          <img className="h-20 filter grayscale dark:invert" src="/sqlserver.svg" alt="SQL Server" />
          <img className="h-20" src="/DBeaver.svg" alt="DBeaver" />
          {/* <img className="h-20" src="/Jira.svg" alt="Jira" /> */}
          {/* <img className="h-20" src="/Docker.svg" alt="Docker" /> */}
          <img className="h-20" src="/Kubernetes.svg" alt="Kubernetes" />
          <img className="h-20" src="/linux.svg" alt="Linux" />

          {/* === Data Science / AI === */}
          <img className="h-20" src="/tensorflow.svg" alt="TensorFlow" />
          <img className="h-20" src="/scikit-learn.svg" alt="Scikit-Learn" />
          <img className="h-20" src="/NumPy.svg" alt="NumPy" />
          <img className="h-20" src="/opencv.svg" alt="OpenCV" />
          <img className="h-20 filter grayscale dark:invert" src="/jupyter.svg" alt="Jupyter" />
          {/* <img className="h-20" src="/GraphQL.svg" alt="GraphQL" /> */}
          <img className="h-20" src="/Grafana.svg" alt="Grafana" />
          <img className="h-20" src="/Figma.svg" alt="Figma" />
          <img className="h-20" src="/Arduino.svg" alt="Arduino" />
          <img className="h-20" src="/Firebase.svg" alt="Firebase" />
          {/* <img className="h-20" src="/Selenium_logo.svg.png" alt="Selenium" /> */}
          <img className="h-20 filter grayscale dark:invert" src="/Apache_Spark_logo.svg.svg" alt="Apache Spark" />
          <img className="h-20 filter " src="/terra.svg" alt="Terraform" />
          <img className="h-20" src="/twilio.svg" alt="Twilio" />

        </div>

        {/* Optional subtle blur borders for design symmetry */}
        <ProgressiveBlur className="absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
        <ProgressiveBlur className="absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
      </div>
    </section>
  )
}
