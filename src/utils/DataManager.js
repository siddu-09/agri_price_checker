import Papa from 'papaparse';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export const getCrops = async () => {
    try {
        const asset = Asset.fromModule(require('../../assets/data.csv'));
        await asset.downloadAsync();

        let fileContent;
        if (asset.uri.startsWith('http')) {
            const response = await fetch(asset.uri);
            fileContent = await response.text();
        } else {
            fileContent = await FileSystem.readAsStringAsync(asset.localUri || asset.uri);
        }

        return new Promise((resolve, reject) => {
            Papa.parse(fileContent, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    } catch (error) {
        console.error('Error loading crops data:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        return [];
    }
};
