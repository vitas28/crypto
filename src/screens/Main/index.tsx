import {Button, EmptyState, Loader} from '@/components/atoms';
import {TokenList} from '@/components/organisms';
import {useSocketContext} from '@/context';
import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '@/styles/global';

const MainScreen: FC = () => {
  const {
    tokens,
    isLoading,
    hasInternetConnection,
    isConnected,
    handleRefreshTokenList,
  } = useSocketContext();

  const content = useMemo(() => {
    if (!hasInternetConnection) {
      return <EmptyState text="No internet connection" />;
    }
    if (isLoading) {
      return <Loader />;
    }
    if (tokens.length === 0) {
      return <EmptyState text="No data found" />;
    }
    return <TokenList tokens={tokens} />;
  }, [hasInternetConnection, isLoading, tokens]);

  return (
    <View style={[globalStyles.appContainer, styles.container]}>
      {content}
      <Button disabled={!isConnected} onPress={handleRefreshTokenList}>
        Refresh
      </Button>
    </View>
  );
};

export default MainScreen;
