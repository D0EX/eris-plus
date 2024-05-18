type Field = {
    name: string;
    value: string;
    inline: boolean;
};

type Image = {
    url: string;
};

type Footer = {
    text: string;
    icon_url: string;
};

type Author = {
    name: string;
    icon_url: string;
    url: string;
};

class EmbedBuilder {
    private oType: string;
    private oTitle: string | null;
    private oDescription: string | null;
    private oImage: Image | null;
    private oFields: Field[];
    private oFooter: Footer | null;
    private oColor: string | null;
    private oTimestamp: string | null;
    private oAuthor: Author | null;

    constructor() {
        this.oType = "rich";
        this.oTitle = null;
        this.oDescription = null;
        this.oImage = null;
        this.oFields = [];
        this.oFooter = null;
        this.oColor = null;
        this.oTimestamp = null;
        this.oAuthor = null;
    }

    setTitle(title: string): EmbedBuilder {
        this.oTitle = title;
        return this;
    }

    setDescription(description: string): EmbedBuilder {
        this.oDescription = description;
        return this;
    }

    addField(name: string, value: string, inline: boolean = false): EmbedBuilder {
        this.oFields.push({ name, value, inline });
        return this;
    }

    setImage(url: string): EmbedBuilder {
        this.oImage = { url };
        return this;
    }

    setFooter(text: string, icon_url: string): EmbedBuilder {
        this.oFooter = { text, icon_url };
        return this;
    }

    setColor(color: string): EmbedBuilder {
        this.oColor = color;
        return this;
    }

    setTimestamp(timestamp: string): EmbedBuilder {
        this.oTimestamp = timestamp || new Date().toISOString();
        return this;
    }

    setAuthor(name: string, icon_url: string, url: string): EmbedBuilder {
        this.oAuthor = { name, icon_url, url };
        return this;
    }

    get createEmbed(): { embed: any } {
        return {
            embed: {
                type: this.oType,
                title: this.oTitle,
                description: this.oDescription,
                image: this.oImage,
                fields: this.oFields,
                author: this.oAuthor ? { name: this.oAuthor.name, icon_url: this.oAuthor.icon_url, url: this.oAuthor.url } : null,
                color: this.oColor,
                timestamp: this.oTimestamp,
                footer: this.oFooter ? { text: this.oFooter.text, icon_url: this.oFooter.icon_url } : null,
            }
        }
    }
}

export default EmbedBuilder;