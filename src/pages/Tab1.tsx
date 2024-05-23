import {
  IonCard,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonNote,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./Tab1.css";
import { notificationsOutline } from "ionicons/icons";
import { Ambulance, Hospital, Pill, Stethoscope } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div className="px-4">
          {/* title */}
          <div className="flex justify-between items-center pt-6">
            <h1 className="text-2xl text-start font-semibold">
              Find your Desire <br /> healt solution
            </h1>
            <IonIcon icon={notificationsOutline} size="large" />
          </div>
          {/* search */}

          {/* quick-access */}
          <IonGrid className="mt-6">
            <IonRow className="gap-3">
              <IonCol className="flex flex-col justify-center items-center">
                <Stethoscope color="#199A8E" size={32} />
                <p className="text-sm mt-2 text-gray-400">Doctor</p>
              </IonCol>
              <IonCol className="flex flex-col justify-center items-center">
                <Pill color="#199A8E" size={32} />
                <p className="text-sm mt-2 text-gray-400">Pharmacy</p>
              </IonCol>
              <IonCol className="flex flex-col justify-center items-center">
                <Hospital color="#199A8E" size={32} />
                <p className="text-sm mt-2 text-gray-400">Hospital</p>
              </IonCol>
              <IonCol className="flex flex-col justify-center items-center">
                <Ambulance color="#199A8E" size={32} />
                <p className="text-sm mt-2 text-gray-400">Ambulance</p>
              </IonCol>
            </IonRow>
          </IonGrid>
          {/* Card-promo */}
          <div className="flex bg-[#E8F3F1] p-4 rounded-md mt-4">
            <div className="pr-4">
              <p className="text-lg font-semibold">
                Early protection for your family health
              </p>
              <button className="bg-[#199A8E] mt-4 text-white py-2 px-4 rounded-full font-medium">
                Learn more
              </button>
            </div>
            <img
              alt="Silhouette of mountains"
              src="https://ionicframework.com/docs/img/demos/card-media.png"
              className="w-28"
            />
          </div>
          {/* Top-doctor */}
          <Swiper spaceBetween={2} slidesPerView={2.5}>
            <SwiperSlide>
              <div className="px-6 py-2 border-2 rounded-xl w-[118px]">
                <div className="w-full py-5">
                  <img
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                    alt="img-doctor"
                    className="rounded-full w-20 h-20 mx-auto"
                  />
                </div>
                <p className="text-xs">Dr. Maria Elena</p>
                <p className="text-subtitle-card">Psychologist</p>
                <div className="flex">
                  <div>
                    {/* icon */}
                    <p className="text-score">4,9</p>
                  </div>
                  <div>
                    {/* icon */}
                    <p className="text-score">1,5km away</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Health-article */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
