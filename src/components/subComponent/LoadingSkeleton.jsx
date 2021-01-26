import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoadingSkeleton = () => {
    return (<View>
        <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">

                <SkeletonPlaceholder.Item marginLeft={20}>
                    <SkeletonPlaceholder.Item width={windowWidth * 0.8} height={300} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width='90%'
                        height={20}
                        borderRadius={4}
                        marginBottom={10}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">

                <SkeletonPlaceholder.Item marginLeft={20}>
                    <SkeletonPlaceholder.Item width={windowWidth * 0.9} height={250} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width='90%'
                        height={20}
                        borderRadius={4}
                        marginBottom={10}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">

                <SkeletonPlaceholder.Item marginLeft={20}>
                    <SkeletonPlaceholder.Item width={windowWidth * 0.8} height={300} borderRadius={4} />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width='90%'
                        height={20}
                        borderRadius={4}
                        marginBottom={10}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    </View>
    );
};

export default LoadingSkeleton