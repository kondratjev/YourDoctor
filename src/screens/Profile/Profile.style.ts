import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Container = styled.ScrollView`
  background-color: #f5f6f8;
  flex: 1;
`;

export const Head = styled.View``;

export const HeadPhoto = styled.Image`
  width: 100%;
  height: 300px;
`;

export const HeadGradient = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;

export const HeadFooter = styled.View`
  position: absolute;
  bottom: 20px;
  left: 15px;
`;

export const HeadName = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  line-height: 40px;
`;

export const HeadInfo = styled.Text`
  color: #eee;
  font-size: 16px;
`;

export const Measurement = styled.View`
  padding-left: 15px;
`;

export const MeasurementWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: #efefef;
  border-bottom-width: 1.5px;
  padding: 15px 15px 15px 0;
`;

export const MeasurementInfo = styled.View``;

export const MeasurementInfoTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #222;
`;

export const MeasurementInfoFooter = styled.View`
  flex-direction: row;
  margin-top: 7px;
`;

export const MeasurementInfoText = styled.Text`
  font-size: 15px;
  color: #9f9f9f;
`;

export const MeasurementInfoDate = styled.Text`
  color: #9f9f9f;
  font-size: 15px;
  margin-left: 15px;
`;

export const MeasurementPulse = styled.Text`
  font-size: 38px;
  color: #37c933;
`;

export const CategoryButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 15px;
`;

export const CategoryButtonText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #222;
`;
