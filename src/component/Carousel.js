import React, {useEffect, useState, useRef, useCallback} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text, Image, ActivityIndicator, LogBox} from 'react-native';
import {Carouseldata} from '../utilities/Data.json'

const Carousel = (props) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState(Carouseldata);

  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  
  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  const onSlideChange = useCallback(() => {
    const newIndex =
      selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {clearInterval(intervalId);};
  }, [onSlideChange]);

  const onTouchStart = () => {
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    startInterval();
  };
 
  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View style={{width: dimension.width}}>
    
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        pagingEnabled>
        {carouselImages.map((value, key) => (
          <View style={{flexDirection:'row', height: 140, width: dimension?.width}} key={key}>
          <Image
            source={{uri: `${value.url}`}}
            style={{width:'35%', resizeMode: 'cover'}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={{width:'55%' , overflow:'hidden', paddingHorizontal:5, paddingVertical:5}}>
            <Text style={styles.title}>{value.title}</Text>
            <Text style={styles.subtitle}>{value.subtitle}</Text>
            <Text style={styles.content}>{value.content}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text style={styles.pricecontent}>{value.pricecontent}</Text>
              <Text style={styles.price}>${value.price}</Text>            
            </View>
          </View>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {carouselImages.map((val, key) => (
          <Text
            key={key}
            style={key === selectedIndex ? {color: 'white'} : {color: '#888'}}>
            ⬤
          </Text>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    color:'#018ab8',
    fontWeight:'bold',
    fontSize:15
  },
  subtitle:{
    fontWeight:'bold',
    color:'#000',
    fontSize:13
  },
  content:{
    fontWeight:'500',
    color:'#000',
    flexWrap:'wrap' ,
    fontSize:12,
    paddingVertical:5
  },
  pricecontent:{

  },
  price:{
    color:'#d06602',
    fontWeight:'bold'
  }

});

export default Carousel;