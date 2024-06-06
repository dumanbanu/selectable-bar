import React, { useContext, useEffect, useState } from 'react';
import ContentContainer from '../content-container/Index';
import TabBar from '../tab-bar/Index';
import Description from '../description/Index';
import Animation from '../animation/Index';
import { Context } from '../../context/Context';
import TabBarItem, {
  AnimationTypes,
  tabBarOptionsList,
} from '../../assets/options/items';
import AnimationFadeIn from '../../components/animation-fade-in/Index';

function Index() {
  const { activeOption } = useContext(Context);
  const selectedOption: TabBarItem | undefined = tabBarOptionsList?.find(
    (option) => activeOption === option?.id,
  );
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevState) => prevState + 1);
  }, [activeOption]);

  return (
    <div
      style={{ backgroundColor: '#F5F5F7' }}
      className={'pos-layout-container'}
    >
      <div className={'bg-white'}>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div
              className={
                'col-md-6 d-flex justify-content-center p-0 order-md-1 order-2 '
              }
            >
              <ContentContainer>
                <Animation imageSource={selectedOption?.image} />
                {selectedOption &&
                selectedOption?.nextAnimation === AnimationTypes.slideUp
                  ? selectedOption?.nextAnimationSource.map(
                      (source: string, index: number) => {
                        return (
                          <>
                            <Animation
                              delay={300 * index + 1}
                              imageSource={source}
                              externalClass={'animation-absolute'}
                              key={key}
                            />
                          </>
                        );
                      },
                    )
                  : selectedOption?.nextAnimation === AnimationTypes.fadeIn &&
                    selectedOption?.nextAnimationSource.map(
                      (source: string, index: number) => {
                        return (
                          <>
                            <AnimationFadeIn
                              delay={700 * index + 1}
                              imageSource={source}
                              externalClass={'animation-absolute z-index'}
                              key={key}
                            />
                          </>
                        );
                      },
                    )}
              </ContentContainer>
            </div>
            <div className={'col-md-6 p-0  d-flex order-md-2 order-1'}>
              <ContentContainer
                className={'align-center d-flex desc-content-container'}
              >
                <Description />
              </ContentContainer>
            </div>
          </div>

          <div className={'tab-bar-scroll'}>
            <div className={'col-12 tab-bar'}>
              <TabBar keyI={key} />
            </div>
          </div>
          <div
            className={'row'}
            style={{
              height: '500px',
              width: '100%',
              position: 'absolute',
              zIndex: '20',
              backgroundColor: 'rgb(245, 245, 247)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
