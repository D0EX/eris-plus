type ButtonStyle = 'primary' | 'secondary' | 'success' | 'danger' | 'link';

class ButtonBuilder {
    type: number;
    label: string | null;
    disabled: boolean;
    style: number;
    url: string | null;
    custom_id: string | null;
    emoji: string | null;

    constructor() {
        this.type = 2;
        this.label = null;
        this.disabled = false;
        this.style = 1;
        this.url = null;
        this.custom_id = null;
        this.emoji = null;
    }

    setLabel(label: string): ButtonBuilder {
        this.label = label;
        return this;
    }

    setDisabled(): ButtonBuilder {
        this.disabled = true;
        return this;
    }

    setStyle(style: ButtonStyle): ButtonBuilder {
        const styles: Record<ButtonStyle, number> = {
            primary: 1,
            secondary: 2,
            success: 3,
            danger: 4,
            link: 5
        };
        this.style = styles[style];
        return this;
    }

    setURL(url: string): ButtonBuilder {
        this.url = url;
        return this;
    }

    setCustomID(custom_id: string): ButtonBuilder {
        this.custom_id = custom_id;
        return this;
    }

    setEmoji(emoji: string): ButtonBuilder {
        this.emoji = emoji;
        return this;
    }
}

interface Row {
    [key: string]: any;
}

function RowBuilder(...rows: Row[]): { type: number, components: Row[] } {
    let components = {
        type: 1,
        components: [] as Row[]
    };
    rows.forEach(row => {
        components.components.push({...row});
    });
    return components;
}

export { ButtonBuilder, RowBuilder }