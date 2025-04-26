import { lobeChat, useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import { memo, useEffect, useState } from 'react';
import { Center } from 'react-layout-kit';

import { ResponseData } from '@/type';

const Render = memo(() => {
  const { loading, data } = useWatchPluginMessage<ResponseData>();

  // 记录请求参数
  const [payload, setPayload] = useState<any>();

  useEffect(() => {
    if (!loading) {
      lobeChat.getPluginPayload().then((payload) => {
        console.log(payload);
        setPayload(payload);
      });
    }
  }, [loading]);

  return (
    <Center>
      <h2>payload:</h2>
      <pre>{JSON.stringify(payload, undefined, 2)}</pre>

      <h2>data:</h2>
      <pre>{loading ? 'loading...' : JSON.stringify(data, undefined, 2)}</pre>
    </Center>
  );
});

export default Render;
