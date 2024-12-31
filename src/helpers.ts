import { BasicChatOutput } from '.';

async function* basicStreamToAsyncIterable(
	stream: ReadableStream<ArrayBufferLike>
) {
	const reader = stream.getReader();

	try {
		const decoder = new TextDecoder();
		let buffer: string | undefined = '';

		while (true) {
			const { done, value } = await reader.read();
			const chunk = decoder.decode(value);

			for (const char of chunk) {
				buffer += char;

				// Check if the current buffer forms a valid JSON object
				if (buffer.trim().startsWith('{') && buffer.trim().endsWith('}')) {
					try {
						const parsed: BasicChatOutput = JSON.parse(buffer);

						buffer = ''; // Reset buffer after successful parse
						yield parsed;
					} catch (error) {}
				}
			}

			if (done) break;
		}
	} finally {
		reader.releaseLock();
	}
}

export function basicIterableReadableStream(
	stream: ReadableStream<Uint8Array>
) {
	return basicStreamToAsyncIterable(stream);
}
