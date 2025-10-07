import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud3() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm"></p>
                    </div>

                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider speedOnHover={20} speed={200} gap={112}>
                            
                            {/* === Cloud & Data === */}
                            <img className="mx-auto h-7 w-fit" src="/postgresql-ar21.svg" alt="PostgreSQL" />
                            <img className="mx-auto h-7 w-fit" src="/sqlserver.svg" alt="SQL Server" />
                            <img className="mx-auto h-7 w-fit" src="/mongo.svg" alt="MongoDB" />
                            <img className="mx-auto h-7 w-fit" src="/CouchDB.svg" alt="CouchDB" />
                            <img className="mx-auto h-7 w-fit" src="/Oracle.svg" alt="Oracle" />
                            <img className="mx-auto h-7 w-fit" src="/Apache Cassandra.svg" alt="Cassandra" />
                            <img className="mx-auto h-7 w-fit" src="/Google Cloud.svg" alt="Google Cloud" />
                            <img className="mx-auto h-7 w-fit" src="/Red Hat.svg" alt="Red Hat" />
                            <img className="mx-auto h-7 w-fit" src="/Jenkins.svg" alt="Jenkins" />

                            {/* === Programming Languages === */}
                            <img className="mx-auto h-7 w-fit" src="/python.svg" alt="Python" />
                            <img className="mx-auto h-7 w-fit" src="/C++ (CPlusPlus).svg" alt="C++" />
                            <img className="mx-auto h-7 w-fit" src="/Go.svg" alt="Go" />
                            <img className="mx-auto h-7 w-fit" src="/r.svg" alt="R" />
                            <img className="mx-auto h-7 w-fit" src="/ts.svg" alt="TypeScript" />

                            {/* === Frameworks / Tools === */}
                            <img className="mx-auto h-7 w-fit" src="/django.svg" alt="Django" />
                            <img className="mx-auto h-7 w-fit" src="/Express.svg" alt="Express.js" />
                            <img className="mx-auto h-7 w-fit" src="/FastAPI.svg" alt="FastAPI" />
                            <img className="mx-auto h-7 w-fit" src="/react-svgrepo-com.svg" alt="React" />
                            <img className="mx-auto h-7 w-fit" src="/nextjs.svg" alt="Next.js" />
                            <img className="mx-auto h-7 w-fit" src="/Electron.svg" alt="Electron" />
                            <img className="mx-auto h-7 w-fit" src="/DBeaver.svg" alt="DBeaver" />
                            <img className="mx-auto h-7 w-fit" src="/Jira.svg" alt="Jira" />
                            <img className="mx-auto h-7 w-fit" src="/DockerSvg.svg" alt="Docker" />
                            <img className="mx-auto h-7 w-fit" src="/Kubernetes.svg" alt="Kubernetes" />
                            <img className="mx-auto h-7 w-fit" src="/linux.svg" alt="Linux" />

                            {/* === Data Science / AI === */}
                            <img className="mx-auto h-7 w-fit" src="/tensorflow.svg" alt="TensorFlow" />
                            <img className="mx-auto h-7 w-fit" src="/scikit-learn.svg" alt="Scikit-Learn" />
                            <img className="mx-auto h-7 w-fit" src="/NumPy.svg" alt="NumPy" />
                            <img className="mx-auto h-7 w-fit" src="/opencv.svg" alt="OpenCV" />
                            <img className="mx-auto h-7 w-fit" src="/jupyter.svg" alt="Jupyter" />
                            <img className="mx-auto h-7 w-fit" src="/GraphQL.svg" alt="GraphQL" />
                            <img className="mx-auto h-7 w-fit" src="/Grafana.svg" alt="Grafana" />
                            <img className="mx-auto h-7 w-fit" src="/Figma.svg" alt="Figma" />
                            <img className="mx-auto h-7 w-fit" src="/Arduino.svg" alt="Arduino" />
                            <img className="mx-auto h-7 w-fit" src="/Firebase.svg" alt="Firebase" />
                            <img className="mx-auto h-7 w-fit" src="/Selenium_logo.svg.png" alt="Selenium" />
                            <img className="mx-auto h-7 w-fit" src="/Apache_Spark_logo.svg.svg" alt="Apache Spark" />
                            <img className="mx-auto h-7 w-fit" src="/terra.svg" alt="Terraform" />
                            <img className="mx-auto h-7 w-fit" src="/twilio.svg" alt="Twilio" />

                        </InfiniteSlider>

                        {/* Progressive Blur Effects */}
                        <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                        <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
                    </div>
                </div>
            </div>
        </section>
    )
}
